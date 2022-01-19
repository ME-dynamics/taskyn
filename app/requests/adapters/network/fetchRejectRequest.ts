import { request } from "../../../library";

import type { IFetchRejectRequestResult } from "../../types";

export async function fetchRejectRequest(
  customerId: string
): Promise<IFetchRejectRequestResult> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/provider/requests/reject/${customerId}`,
    method: "DELETE",
    body: undefined,
  });
  return {
    error,
    removed: success,
  };
}
