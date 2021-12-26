import { request, toString } from "../../../library";

import { IFetchRequest } from "../../types";

export async function fetchRequest(): Promise<IFetchRequest> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/customer/requests",
    method: "GET",
    body: undefined,
  });
  const errorMessage = httpStatus === 404 ? "درخواستی یافت نشد" : error;
  if (!success) {
    return {
      error: errorMessage,
      request: {
        providerId: "",
        requestConfirmed: false,
      },
    };
  }
  return {
    error: "",
    request: {
      providerId: toString(payload?.providerId),
      requestConfirmed: Boolean(payload?.requestConfirmed),
    },
  };
}
