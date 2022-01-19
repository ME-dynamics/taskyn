import { request } from "../../../library";

export async function fetchRemoveCustomer(customerId: string) {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/provider/customers/${customerId}`,
    method: "DELETE",
    body: undefined,
  });
  // if (!success || !payload) {
  //   return {
  //     error,
  //     customerRemoved: {},
  //   };
  // }
  // return {
  //   error: "",
  //   customerRemoved: payload,
  // };
  return success;
}
