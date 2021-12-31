import { secureStorage, storage } from "../../library";
import { fetchPasswordlessVerify } from "../adapters";
import { inputState, authState } from "../entities";

export async function passwordlessVerify() {
  if (!inputState.otpNumber) {
    inputState.setOtpValidation(["کد تایید را وارد کنید"]);
  }
  const { error, jwt, jwtExpires, refreshExpires, refreshToken, role, userId } =
    await fetchPasswordlessVerify(inputState.otpNumber);
  if (error) {
    inputState.setOtpValidation([error]);
    return;
  }
  if (
    !jwt ||
    !refreshToken ||
    !refreshExpires ||
    !jwtExpires ||
    !role ||
    !userId
  ) {
    return;
  }
  await Promise.all([
    secureStorage.add("refresh_token", refreshToken),
    secureStorage.add("token", jwt),
    storage.add("token_expires_at", `${jwtExpires}`),
    storage.add("refresh_expires_at", `${refreshExpires}`),
    storage.add("role", role),
    storage.add("userId", userId),
  ]);

  authState.setRefreshToken(refreshToken);
  authState.setToken(jwt);
  authState.setRefreshExpire(refreshExpires);
  authState.setTokenExpire(jwtExpires);
  if (role === "customer" || role === "provider") {
    authState.setRole(role);
  }
  inputState.setOtpNumber("");
}
