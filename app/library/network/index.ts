import { IRequest, IResponse } from "./types";

const serverUrl = "https://localhost:13000";

export async function request(info: IRequest): Promise<IResponse> {
  try {
    const { token, method, endpoint, body } = info;
    const response: Response = await fetch(`${serverUrl}${endpoint}`, {
      method,
      headers: {
        Authorization: token || "no-token",
        "Content-type": "application/json",
        "Accept-Encoding": "gzip",
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const payload = await response.json();
    const { ok, status } = response;
    return {
      success: ok,
      httpStatus: status,
      payload: ok ? payload : undefined,
      error: !ok ? payload?.error : undefined,
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
