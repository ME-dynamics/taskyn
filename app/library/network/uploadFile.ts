import { uploadAsync, FileSystemUploadType } from "expo-file-system";
import { secureStorage, storage } from "../storage";
import { serverUrl, customerJwtPayload, providerJwtPayload } from "./constant";
import { IResponse, IUploadFile, tFileType } from "./types";

function endpointGen(type: tFileType) {
  switch (type) {
    case "image":
      return `${serverUrl}/images/upload`;
    default:
      return "no where";
  }
}

export function buildUploadFile() {
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
  return async function uploadFile(info: IUploadFile): Promise<IResponse> {
    const { path, type } = info;
    const endPoint = endpointGen(type);
    const { body, headers, mimeType, status } = await uploadAsync(
      endPoint,
      path,
      {
        fieldName: "imageFile",
        httpMethod: "POST",
        uploadType: FileSystemUploadType.MULTIPART,
        headers: {
          Authorization: (await getJwtToken()) || "no-token",
          "Content-type": "multipart/form-data",
          Accept: "application/json",
          "Accept-Encoding": "gzip",
          "x-jwt-payload": providerJwtPayload,
        },
        parameters: {
          access: "private",
          transform: "note",
        },
      }
    );
    const success = status >= 200 && status <= 299;
    const data = JSON.parse(body);
    return {
      success,
      error: success ? "" : data.error,
      httpStatus: status,
      payload: success ? data?.payload : "",
    };
  };
}
