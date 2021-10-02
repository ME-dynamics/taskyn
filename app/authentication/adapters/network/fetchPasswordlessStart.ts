import { request } from "../../../library";
import { auth } from "../../entities";
import { adapterTypes } from "../../types";

export async function fetchPasswordlessStart(
  phoneNumber: string
): Promise<adapterTypes.IFetchPasswordlessStartResult> {
  const { success, httpStatus, payload, error } = await request({
    token: auth.token,
    endpoint: "/v1/customer/passwordless/start",
    method: "POST",
    body: { phoneNumber },
  });
  if (!success) {
    return {
      error: error,
      otpToken: undefined,
    };
  }
  return {
    otpToken: payload ? String(payload.otpToken) : "",
    error: undefined,
  };
}
