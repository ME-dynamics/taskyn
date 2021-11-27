import { request, toString } from "../../../library";
import { adapterTypes } from "../../types";

export async function fetchPasswordlessStart(
  phoneNumber: string
): Promise<adapterTypes.IFetchPasswordlessStartResult> {
  const { success, httpStatus, payload, error } = await request({
    endpoint: "/passwordless/start",
    method: "POST",
    body: { phoneNumber },
  });
  if (!success) {
    return {
      error: error || "",
      otpToken: "",
    };
  }
  return {
    otpToken:toString(payload?.otpToken),
    error: "",
  };
}
