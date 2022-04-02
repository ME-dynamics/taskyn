import { autorun } from "mobx";

import {
  storage,
  secureStorage,
  toString,
  logger,
  getAppState,
} from "../../library";
import { fetchRefresh } from "../adapters";
import { authState } from "../entities";
import { exit } from "./exit";
let refreshTimer: NodeJS.Timer;

export function isTokenExpired() {
  const tokenExpiresAt = storage.retrieve("token_expires_at", "number");
  if (typeof tokenExpiresAt === "number") {
    return tokenExpiresAt < Date.now() - 60000; // use one minute
  }
  return true;
}

export async function refresh() {
  logger({
    container: "authentication",
    type: "info",
    path: { section: "usecases", file: "silentRefresh" },
    logMessage: "token expired, refreshing",
  });
  const userId = toString(storage.retrieve("user_id", "string"));
  if (!userId) {
    logger({
      container: "authentication",
      type: "error",
      path: { section: "usecases", file: "silentRefresh" },
      logMessage: "user id is not defined",
    });
    clearInterval(refreshTimer);
    return await exit();
  }
  const deviceId = toString(storage.retrieve("device_id", "string"));
  if (!deviceId) {
    logger({
      container: "authentication",
      type: "error",
      path: { section: "usecases", file: "silentRefresh" },
      logMessage: "device id is not defined",
    });
    clearInterval(refreshTimer);
    return await exit();
  }
  const [xToken, xRefreshToken] = await Promise.all([
    secureStorage.retrieve("token"),
    secureStorage.retrieve("refresh_token"),
  ]);
  if (!xToken || !xRefreshToken) {
    // token or refresh token is not defined
    // should exit the app;
    logger({
      container: "authentication",
      type: "error",
      path: { section: "usecases", file: "silentRefresh" },
      logMessage: `token or refresh token is not defined.
       xToken: ${xToken}, xRefresh token: ${xRefreshToken}`,
    });
    clearInterval(refreshTimer);
    return await exit();
  }
  // console.log({ refreshTokenLength: xRefreshToken.length, xRefreshToken });
  const {
    error,
    shouldLogout,
    jwtToken,
    refreshToken,
    jwtExpires,
    refreshExpires,
  } = await fetchRefresh({
    userId,
    deviceId,
    jwtToken: xToken,
    refreshToken: xRefreshToken,
  });

  if (shouldLogout) {
    logger({
      container: "authnz",
      type: "info",
      path: { section: "usecases", file: "silentRefresh" },
      logMessage: "refresh invalidated token, logging out",
    });
    clearInterval(refreshTimer);
    return await exit();
  }
  if (error) {
    logger({
      container: "authnz",
      type: "error",
      path: { section: "usecases", file: "silentRefresh" },
      logMessage: "refresh error: " + error,
    });
    // TODO: show error
    clearInterval(refreshTimer);
    return await exit();
  }
  try {
    await Promise.all([
      secureStorage.add("token", jwtToken),
      secureStorage.add("refresh_token", refreshToken),
    ]);
  } catch (error) {
    logger({
      container: "authnz",
      type: "error",
      path: { section: "usecases", file: "silentRefresh" },
      logMessage: "secure storage add refresh and jwt error: " + error,
    });
    clearInterval(refreshTimer);
    return await exit();
  }
  storage.add("token_expires_at", jwtExpires);
  storage.add("refresh_expires_at", refreshExpires);
  // authState.setToken(jwtToken);
  // authState.setRefreshToken(refreshToken);
  // authState.setTokenExpire(jwtExpires);
  // authState.setRefreshExpire(refreshExpires);
  authState.setCredentials({
    token: jwtToken,
    refreshToken: refreshToken,
    tokenExpiresAt: jwtExpires,
    refreshExpiresAt: refreshExpires,
  });
}

export function registerSilentRefresh() {
  const silentRefreshAutoRunDisposer = autorun(() => {
    const appState = getAppState();
    if (appState !== "active") {
      logger({
        container: "authentication",
        path: { section: "usecases", file: "silentRefresh" },
        type: "info",
        logMessage: `app inactive, state: ${appState}, clearInterval`,
      });
      clearInterval(refreshTimer);
      return;
    }
    if (
      !authState.token ||
      !authState.refreshToken ||
      !authState.tokenExpiresAt
    ) {
      logger({
        container: "authentication",
        path: { section: "usecases", file: "silentRefresh" },
        type: "info",
        logMessage: `token or refresh token is not defined, or token expire time is zero. token: ${authState.token}, refreshToken: ${authState.refreshToken},
        token expires at: ${authState.tokenExpiresAt}`,
      });
      clearInterval(refreshTimer);
      return;
    }

    if (authState.tokenExpiresAt < Date.now() - 4000) {
      logger({
        container: "authentication",
        path: { section: "usecases", file: "silentRefresh" },
        type: "info",
        logMessage: `token is already expired, tokenExpiresAt: ${
          authState.tokenExpiresAt
        }, now: ${Date.now()}`,
      });
      refresh();
    } else {
      logger({
        container: "authentication",
        path: { section: "usecases", file: "silentRefresh" },
        type: "info",
        logMessage: `token is not expired, setting interval`,
      });
      // time to refresh the token is : time token expires minus now minus four seconds
      // refresh request is going to be done four seconds before token expires
      const timeToRefresh = authState.tokenExpiresAt - Date.now() - 4000;
      if (timeToRefresh < 1e4) {
        logger({
          container: "authentication",
          path: { section: "usecases", file: "silentRefresh" },
          type: "info",
          logMessage: `token expires in less than 10 seconds, refreshing`,
        });
        // if time to refresh is less than 10 seconds, then refresh
        refresh();
        return;
      }
      if (refreshTimer) {
        clearInterval(refreshTimer);
      }
      const oneMinutesInMsc = 60 * 1000;
      const interval =
        timeToRefresh > oneMinutesInMsc ? oneMinutesInMsc : timeToRefresh;

      refreshTimer = setInterval(() => {
        // const timeToRefresh = authState.tokenExpiresAt - Date.now() - 4000;
        if (timeToRefresh < 1e4) {
          // if time to refresh is less than 10 seconds, then refresh
          logger({
            container: "authentication",
            path: { section: "usecases", file: "silentRefresh" },
            type: "info",
            logMessage: `token expires in less than 10 seconds, refreshing in timer`,
          });
          refresh();
          return;
        }
        // logger({
        //   container: "authentication",
        //   path: { section: "usecases", file: "silentRefresh" },
        //   type: "info",
        //   logMessage: `interval ran, but token is not refreshed, time to refresh: ${timeToRefresh}`,
        // });
      }, interval);
    }
  });
  return silentRefreshAutoRunDisposer;
}
