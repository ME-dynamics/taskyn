import { request, toString } from "../../../library";
import { authState } from "../../entities";
import { adapterTypes } from "../../types";

export async function fetchRefresh(
  args: adapterTypes.IFetchRefresh
): Promise<adapterTypes.IFetchRefreshResult> {
  const { userId } = args;
  const { success, httpStatus, payload, error } = await request({
    endpoint: "/authnz/refresh",
    method: "POST",
    body: {
      userId,
      xJwtToken: authState.token,
      xRefreshToken: authState.refreshToken,
    },
  });
  if (!success) {
    return {
      jwtToken: "",
      refreshToken: "",
      jwtExpires: 0,
      refreshExpires: 0,
      shouldLogout: httpStatus === 404 || httpStatus === 403,
      error: error,
    };
  }
  const jwtToken = toString(payload?.jwtToken);
  const refreshToken = toString(payload?.refreshToken);
  const jwtExpires = Number(payload?.jwtTokenExpiresAt);
  const refreshExpires = Number(payload?.refreshTokenExpiresAt);
  return {
    jwtToken,
    refreshToken,
    jwtExpires,
    refreshExpires,
    shouldLogout: false,
    error: "",
  };
}
