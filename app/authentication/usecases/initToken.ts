import { secureStorage, storage } from "../../library";
import { auth } from "../entities";
export async function initToken() {
  const [token, refreshToken, tokenExpiresAt, refreshExpiresAt, role] =
    await Promise.all([
      secureStorage.retrieve("refresh_token"),
      secureStorage.retrieve("token"),
      storage.retrieve("token_expires_at"),
      storage.retrieve("refresh_expires_at"),
      storage.retrieve("role"),
    ]);
  auth.setRefreshToken(refreshToken || "");
  auth.setToken(token || "");
  auth.setTokenExpire(tokenExpiresAt ? parseInt(tokenExpiresAt, 10) : 0);
  auth.setRefreshExpire(refreshExpiresAt ? parseInt(refreshExpiresAt, 10) : 0);
  auth.setRole(role || "");
}
