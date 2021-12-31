import { secureStorage, storage } from "../storage";
import { netInfoState } from "../netInfo";
import { serverUrl } from "./constant";
import { IRequest, IResponse } from "./types";

export function buildRequest() {
  // create request cache
  // cache token and token validation time
  let tokenCache = "";
  let tokenCacheValidTime = 0;
  /**
   * retrieve token and expire time and set them to cache
   */
  async function setToken() {
    const jwtToken = await secureStorage.retrieve("token");
    const tokenExpiresAt = await storage.retrieve("token_expires_at");
    tokenCache = jwtToken ? jwtToken : "";
    tokenCacheValidTime = tokenExpiresAt ? parseInt(tokenExpiresAt, 10) : 0;
  }
  /**
   * get token from cache
   * if token expire time is not greater than now, cache is stale
   * if cache is stale, setToken method gets called again to renew token
   * token is refreshed by default with silent refresh
   */
  async function getJwtToken() {
    if (tokenCache && tokenCacheValidTime) {
      if (tokenCacheValidTime > Date.now()) {
        await setToken();
      }
      return tokenCache;
    }
    // if there are no token here
    await setToken();
    return tokenCache;
  }
  return async function request(info: IRequest): Promise<IResponse> {
    if (!netInfoState.hasAccess) {
      return {
        error: "عدم دسترسی به اینترنت",
        httpStatus: -1,
        payload: undefined,
        success: false,
      };
    }
    let timeoutId: NodeJS.Timeout | undefined = undefined;
    try {
      const controller = new AbortController();
      const { method, endpoint, body } = info;
      const url = `${serverUrl}${endpoint}`;
      const token = `Bearer ${await getJwtToken()}`;
      timeoutId = setTimeout(() => controller.abort(), 4000);
      const response: Response = await fetch(url, {
        method,
        headers: {
          Authorization: token,
          "Content-type": "application/json",
          Accept: "application/json",
          "Accept-Encoding": "gzip",
          // "x-jwt-payload": customerJwtPayload,
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const { ok, status } = response;
      if (!ok && status === 401) {
        return {
          success: false,
          error: "توکن کاربری منقضی شده.",
          httpStatus: status,
          payload: undefined,
        };
      }

      const data = await response.json();
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
          error: "سرور در زمان مناسب پاسخ گو نبود.",
        };
      }
      return {
        success: false,
        httpStatus: 0,
        payload: undefined,
        error: "خطا",
      };
    }
  };
}
