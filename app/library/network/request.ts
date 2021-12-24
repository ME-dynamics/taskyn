import { secureStorage, storage } from "../storage";
import { netInfoState } from "../netInfo";
import { serverUrl, customerJwtPayload, providerJwtPayload } from "./constant";
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
    const tokenExpiresAt = storage.retrieve("refresh_expires_at", "number");
    tokenCache = jwtToken ? jwtToken : "";
    tokenCacheValidTime =
      typeof tokenExpiresAt === "number" ? tokenExpiresAt : 0;
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
      timeoutId = setTimeout(() => controller.abort(), 4000);
      const response: Response = await fetch(`${serverUrl}${endpoint}`, {
        method,
        headers: {
          Authorization: (await getJwtToken()) || "no-token",
          "Content-type": "application/json",
          Accept: "application/json",
          "Accept-Encoding": "gzip",
          // "x-jwt-payload": customerJwtPayload,
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
