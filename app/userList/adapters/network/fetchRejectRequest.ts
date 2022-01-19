import { request } from "../../../library";

export async function fetchRejectRequest(customerId: string) {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/provider/requests/reject/${customerId}`,
    method: "DELETE",
    body: undefined,
  });
  // if (!success || !payload) {
  //   return {
  //     error,
  //     rejected: {},
  //   };
  // }
  // return {
  //   error: "",
  //   rejected: payload,
  // };
  return success;
}
