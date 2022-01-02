import { request, toString } from "../../../library";
import { IFetchRequest } from "../../types";

export async function fetchCreateRequest(
  providerId: string
): Promise<IFetchRequest> {
  console.log({ providerId });
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/customer/requests",
    method: "POST",
    body: {
      providerId,
    },
  });
  if (!success) {
    return {
      error,
      request: {
        requestConfirmed: false,
        providerId: "",
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
