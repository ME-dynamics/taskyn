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
