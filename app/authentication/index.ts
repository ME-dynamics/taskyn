import { authState } from "./entities";
export * from "./screens";
export { initToken, exit, registerSilentRefresh } from "./usecases";
export function getLoggedIn() {
  return authState.loggedIn;
}

export function getRole() {
  return authState.role;
}
export function getJWT() {
  return authState.token;
}
