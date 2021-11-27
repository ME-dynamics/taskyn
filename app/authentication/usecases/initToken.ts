import { secureStorage, storage } from "../../library";
import { authState } from "../entities";
export async function initToken() {
  const [token, refreshToken, tokenExpiresAt, refreshExpiresAt, role] =
    await Promise.all([
      secureStorage.retrieve("refresh_token"),
      secureStorage.retrieve("token"),
      storage.retrieve("token_expires_at"),
      storage.retrieve("refresh_expires_at"),
      storage.retrieve("role"),
    ]);
  authState.setRefreshToken(refreshToken || "");
  authState.setToken(token || "");
  authState.setTokenExpire(tokenExpiresAt ? parseInt(tokenExpiresAt, 10) : 0);
  authState.setRefreshExpire(
    refreshExpiresAt ? parseInt(refreshExpiresAt, 10) : 0
  );
  if (role === "provider" || role === "customer") {
    authState.setRole(role);
  }
}
