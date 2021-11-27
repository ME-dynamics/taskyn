import { request, toString } from "../../../library";
import { authState } from "../../entities";
import { adapterTypes } from "../../types";
export async function fetchPasswordlessVerify(
  otpNumber: string
): Promise<adapterTypes.IFetchPasswordlessVerifyResult> {
  const { success, httpStatus, payload, error } = await request({
    endpoint: "/passwordless/verify",
    method: "POST",
    body: { otpCode: otpNumber, otpToken: authState.otpToken },
  });
  if (!success) {
    return {
      error: error,
      jwt: "",
      role: "",
      refreshToken: "",
      jwtExpires: 0,
      refreshExpires: 0,
    };
  }

  const jwt = toString(payload?.jwtToken);
  const refreshToken = toString(payload?.refreshToken);
  const refreshExpires = Number(payload?.refreshTokenExpiresAt);
  const jwtExpires = Number(payload?.jwtTokenExpiresAt);
  const role = toString(payload?.role);

  return {
    jwt,
    refreshToken,
    jwtExpires,
    refreshExpires,
    role,
    error: "",
  };
}
