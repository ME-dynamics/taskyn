export interface IRequest {
  token: string | undefined;
  method: "POST" | "PUT" | "PATCH" | "GET" | "DELETE";
  endpoint: string;
  body: Record<string, unknown> | undefined;
}

export interface IResponse {
  success: boolean;
  httpStatus: number;
  payload: Record<string, unknown> | undefined;
  error: string | undefined;
}
