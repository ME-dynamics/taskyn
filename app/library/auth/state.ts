import { action, computed, makeObservable, observable } from "mobx";

class Auth {
  constructor() {
    makeObservable({
      refreshToken: observable,
      token: observable,
      tokenExpiresAt: observable,
      refreshExpiresAt: observable,
      setToken: action,
      setRefreshToken: action,
      loggedIn: computed,
    });
  }
  refreshToken: string | undefined;
  token: string | undefined;
  tokenExpiresAt: number | undefined;
  refreshExpiresAt: number | undefined;
  setToken(newToken: string | undefined) {
    this.token = newToken;
  }
  setRefreshToken(newRefreshToken: string | undefined) {
    this.refreshToken = newRefreshToken;
  }
  setTokenExpire(time: number | undefined) {
    this.tokenExpiresAt = time;
  }
  setRefreshExpire(time: number | undefined) {
    this.refreshExpiresAt = time;
  }
  get loggedIn(): boolean {
    return !!this.refreshToken && !!this.token;
  }
}

export const auth = new Auth();
