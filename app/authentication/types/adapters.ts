export interface IFetchPasswordlessStartResult {
  otpToken: string;
  error: string;
}

export interface IFetchPasswordlessVerifyResult {
  jwt: string | undefined;
  refreshToken: string | undefined;
  refreshExpires: number | undefined;
  jwtExpires: number | undefined;
  role: string | undefined;
  userId: string | undefined;
  error: string | undefined;
}

export interface IFetchRefresh {
  userId: string;
}

export interface IFetchRefreshResult {
  jwtToken: string;
  refreshToken: string;
  refreshExpires: number;
  jwtExpires: number;
  shouldLogout: boolean;
  error: string;
}
