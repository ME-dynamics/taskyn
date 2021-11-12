import { action, computed, makeObservable, observable } from "mobx";

export class Auth {
  constructor() {
    makeObservable(this, {
      refreshToken: observable,
      token: observable,
      tokenExpiresAt: observable,
      refreshExpiresAt: observable,
      otpToken: observable,
      role: observable,
      setToken: action,
      setRefreshToken: action,
      setOtpToken: action,
      setRole: action,
      setRefreshExpire: action,
      setTokenExpire: action,
      loggedIn: computed,
      otpMode: computed,
    });
  }
  refreshToken: string = "";
  token: string = "";
  otpToken: string = "";
  tokenExpiresAt: number = 0;
  refreshExpiresAt: number = 0;
  role: string = 'provider'||'customer';
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
  setRole(role: string) {
    this.role = role;
  }
  get loggedIn(): boolean {
    return !!this.refreshToken && !!this.token;
  }
  get otpMode(): boolean {
    return !!this.otpToken;
  }
}
