import { request, toString } from "../../../library";
import { authState } from "../../entities";
import { adapterTypes } from "../../types";
import { storage } from "../../../library";
export async function fetchPasswordlessVerify(
  otpNumber: string
): Promise<adapterTypes.IFetchPasswordlessVerifyResult> {
  const deviceId = storage.retrieve("device_id", "string");
  const { success, payload, error } = await request({
    endpoint: "/authnz/passwordless/verify",
    method: "POST",
    body: { otpCode: otpNumber, otpToken: authState.otpToken, deviceId },
  });
  if (!success) {
    return {
      error: error,
      jwt: "",
      role: "",
      refreshToken: "",
      jwtExpires: 0,
      refreshExpires: 0,
      userId: "",
    };
  }

  const jwt = toString(payload?.jwtToken);
  const refreshToken = toString(payload?.refreshToken);
  const refreshExpires = Number(payload?.refreshTokenExpiresAt);
  const jwtExpires = Number(payload?.jwtTokenExpiresAt);
  const role = toString(payload?.role);
  const userId = toString(payload?.userId);
  return {
    jwt,
    refreshToken,
    jwtExpires,
    refreshExpires,
    role,
    userId,
    error: "",
  };
}
