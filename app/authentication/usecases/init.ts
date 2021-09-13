import { secureStorage, storage } from "../../library";
import { auth } from "../entities";
export async function init() {
  const [token, refreshToken, tokenExpiresAt, refreshExpiresAt] =
    await Promise.all([
      secureStorage.retrieve("refresh_token"),
      secureStorage.retrieve("token"),
      storage.retrieve("token_expires_at"),
      storage.retrieve("refresh_expires_at"),
    ]);
  auth.setRefreshToken(refreshToken || "");
  auth.setToken(token || "");
  auth.setTokenExpire(
    tokenExpiresAt ? parseInt(tokenExpiresAt, 10) : -1
  );
  auth.setRefreshExpire(
    refreshExpiresAt ? parseInt(refreshExpiresAt, 10) : -1
  );
}
