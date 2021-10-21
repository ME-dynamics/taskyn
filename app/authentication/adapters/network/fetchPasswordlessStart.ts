import { request } from "../../../library";
import { auth } from "../../entities";
import { adapterTypes } from "../../types";

export async function fetchPasswordlessStart(
  phoneNumber: string
): Promise<adapterTypes.IFetchPasswordlessStartResult> {
  const { success, httpStatus, payload, error } = await request({
    token: auth.token,
    endpoint: "/passwordless/start",
    method: "POST",
    body: { phoneNumber },
  });
  if (!success) {
    return {
      error: error,
      otpToken: "",
    };
  }
  return {
    otpToken: payload ? String(payload.otpToken) : "",
    error: "",
  };
}
