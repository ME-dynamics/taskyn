import { autorun } from "mobx";

import { storage, secureStorage, toString } from "../../library";
import { fetchRefresh } from "../adapters";
import { authState } from "../entities";
import { exit } from "./exit";
let refreshTimer: NodeJS.Timer;

async function silentRefresh() {
  if (
    authState.tokenExpiresAt &&
    authState.tokenExpiresAt < Date.now() - 4000
  ) {
    const userId = toString(storage.retrieve("userId", "string"));
    if (userId) {
      const {
        error,
        shouldLogout,
        jwtToken,
        refreshToken,
        jwtExpires,
        refreshExpires,
      } = await fetchRefresh({
        userId,
      });
      if (error) {
        // TODO: show error
      }
      if (shouldLogout) {
        await exit();
      }
      await Promise.all([
        secureStorage.add("token", jwtToken),
        secureStorage.add("refresh_token", refreshToken),
      ]);
      storage.add("token_expires_at", jwtExpires);
      storage.add("refresh_expires_at", refreshExpires);
      authState.setToken(jwtToken);
      authState.setRefreshToken(refreshToken);
      authState.setRefreshExpire(jwtExpires);
      authState.setRefreshExpire(refreshExpires);
    }

    // set silent refresh
  } else {
    // time to refresh the token is : time token expires minus now minus four seconds
    // refresh request is going to be done four seconds before token expires
    const timeToRefresh = authState.tokenExpiresAt - Date.now() - 4000;
    refreshTimer = setTimeout(() => {
      silentRefresh().catch((err) => {
        if (__DEV__) {
          console.warn(err);
        }
      });
    }, timeToRefresh);
  }
}

const silentRefreshAutoRunDisposer = autorun(silentRefresh);
