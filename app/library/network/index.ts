import { IRequest, IResponse } from "./types";

const serverUrl = "https://dangerous-hound-57.loca.lt";

export async function request(info: IRequest): Promise<IResponse> {
  try {
    const { token, method, endpoint, body } = info;
    const response: Response = await fetch(`${serverUrl}${endpoint}`, {
      method,
      headers: {
        Authorization: token || "no-token",
        "Content-type": "application/json",
        Accept: "application/json",
        "Accept-Encoding": "gzip",
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await response.json();
    const { ok, status } = response;
    return {
      success: ok,
      httpStatus: status,
      payload: ok ? data.payload : undefined,
      error: !ok ? data?.error : undefined,
    };
  } catch (err) {
    // show error
    // add sentry
    return {
      success: false,
      httpStatus: -1,
      payload: undefined,
      error: undefined,
    };
  }
}
