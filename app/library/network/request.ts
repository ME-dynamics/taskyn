import { secureStorage, storage } from "../storage";
import { serverUrl, customerJwtPayload, providerJwtPayload } from "./constant";
import { IRequest, IResponse } from "./types";

export function buildRequest() {
  let tokenCache = "";
  let tokenCacheValidTime = 0;
  async function setToken() {
    const [jwtToken, tokenExpiresAt] = await Promise.all([
      secureStorage.retrieve("token"),
      storage.retrieve("refresh_expires_at"),
    ]);
    tokenCache = jwtToken ? jwtToken : "";
    tokenCacheValidTime = tokenExpiresAt ? parseInt(tokenExpiresAt, 10) : 0;
  }
  async function getJwtToken() {
    if (tokenCache && tokenCacheValidTime) {
      if (tokenCacheValidTime > Date.now()) {
        await setToken();
      }
      return tokenCache;
    }
    await setToken();
    return tokenCache;
  }
  return async function request(info: IRequest): Promise<IResponse> {
    let timeoutId: NodeJS.Timeout | undefined = undefined;
    try {
      const controller = new AbortController();
      const { method, endpoint, body } = info;
      timeoutId = setTimeout(() => controller.abort(), 2000);
      const response: Response = await fetch(`${serverUrl}${endpoint}`, {
        method,
        headers: {
          Authorization: (await getJwtToken()) || "no-token",
          "Content-type": "application/json",
          Accept: "application/json",
          "Accept-Encoding": "gzip",
          "x-jwt-payload": providerJwtPayload,
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const data = await response.json();
      const { ok, status } = response;
      return {
        success: ok,
        httpStatus: status,
        payload: ok ? data.payload : undefined,
        error: !ok ? data?.error : undefined,
      };
    } catch (error: any) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const errName = error?.name;
      if (errName === "AbortError") {
        return {
          success: false,
          httpStatus: 0,
          payload: undefined,
          error: "timeout",
        };
      }
      return {
        success: false,
        httpStatus: 0,
        payload: undefined,
        error: "timeout",
      };
    }
  };
}
