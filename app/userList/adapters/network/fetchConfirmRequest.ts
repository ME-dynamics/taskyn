import { request } from "../../../library";

export async function fetchConfirmRequest(customerId: string) {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/provider/requests/confirm",
    body: {
      customerId,
    },
    method: "POST",
  });
  if (!success || !payload) {
    return {
      error,
      confirmed: {},
    };
  }
  return {
    error: "",
    confirmed: payload,
  };
}
