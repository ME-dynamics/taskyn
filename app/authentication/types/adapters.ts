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
  error: string | undefined;
}
