import { IRequest, IResponse } from "./types";

const serverUrl = "https://wonderful-insect-60.loca.lt/api/v1";

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
        "x-jwt-payload":
          "eyJjdXN0b21lciI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly90YXNreW4uaXIiLCJzdWIiOiI5MzBhMGZhOS1jODUwLTQ0MzQtYTZiMS02Mjk1NmE0Y2VjODUiLCJhdWQiOiJ0YXNreW4iLCJqdGkiOiJYZVlyazgiLCJpYXQiOjE2MzQ2NjcxNjksIm5iZiI6MTYzNDY2NzE2OSwiZXhwIjoxNjQwNjY3MTY5fQ",
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
      httpStatus: 0,
      payload: undefined,
      error: undefined,
    };
  }
}
