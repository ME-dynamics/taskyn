import { request } from "../../../library";
import { auth } from "../../entities";
import { adapterTypes } from "../../types";
export async function fetchPasswordlessVerify(
  otpNumber: string
): Promise<adapterTypes.IFetchPasswordlessVerifyResult> {
  const { success, httpStatus, payload, error } = await request({
    token: auth.token,
    endpoint: "/v1/customer/passwordless/verify",
    method: "POST",
    body: { otpCode: otpNumber, otpToken: auth.otpToken },
  });
  if (!success) {
    return {
      error: error,
      jwt: undefined,
      role: undefined,
      refreshToken: undefined,
      jwtExpires: undefined,
      refreshExpires: undefined,
    };
  }
  if (!payload) {
    return {
      error: "no payload",
      jwt: undefined,
      role: undefined,
      refreshToken: undefined,
      jwtExpires: undefined,
      refreshExpires: undefined,
    };
  }
  const jwt = String(payload.jwtToken);
  const refreshToken = String(payload.refreshToken);
  const refreshExpires = Number(payload.refreshTokenExpiresAt);
  const jwtExpires = Number(payload.jwtTokenExpiresAt);
  const role = String(payload.role);

  return {
    jwt,
    refreshToken,
    jwtExpires,
    refreshExpires,
    role,
    error: undefined,
  };
}
