import { action, computed, makeObservable, observable } from "mobx";

export class Auth {
  constructor() {
    makeObservable(this, {
      refreshToken: observable,
      token: observable,
      tokenExpiresAt: observable,
      refreshExpiresAt: observable,
      setToken: action,
      setRefreshToken: action,
      loggedIn: computed,
    });
  }
  refreshToken: string = "";
  token: string = "";
  otpToken: string = "";
  tokenExpiresAt: number = -1;
  refreshExpiresAt: number = -1;
  setToken(newToken: string) {
    this.token = newToken;
  }
  setOtpToken(newOtpToken: string) {
    this.otpToken = newOtpToken;
  }
  setRefreshToken(newRefreshToken: string) {
    this.refreshToken = newRefreshToken;
  }
  setTokenExpire(time: number) {
    this.tokenExpiresAt = time;
  }
  setRefreshExpire(time: number) {
    this.refreshExpiresAt = time;
  }
  get loggedIn(): boolean {
    return !!this.refreshToken && !!this.token;
  }
}
