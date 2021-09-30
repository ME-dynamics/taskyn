export interface IFetchPasswordlessStartResult {
  otpToken: string | undefined;
  error: string | undefined;
}

export interface IFetchPasswordlessVerifyResult {
  jwt: string | undefined;
  refreshToken: string | undefined;
  refreshExpires: number | undefined;
  jwtExpires: number | undefined;
  role: string | undefined;
  error: string | undefined;
}
