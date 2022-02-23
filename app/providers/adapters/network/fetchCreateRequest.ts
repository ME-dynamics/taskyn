import { request } from "../../../library";
import { parseRequest } from "../utils";

import type { IFetchCreateRequestResult } from "../../types";

export async function fetchCreateRequest(
  providerId: string
): Promise<IFetchCreateRequestResult> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/business/requests",
    method: "POST",
    body: {
      providerId,
    },
  });
  if (!success) {
    return {
      error,
      request: undefined,
    };
  }
  return {
    error: "",
    request: parseRequest(payload),
  };
}
