export * from "./screens";
import { authState } from "./entities";
export { initToken, exit } from "./usecases";
export function getLoggedIn() {
  return authState.loggedIn;
}

export function getRole() {
  return authState.role;
}
export function getJWT() {
  return authState.token;
}
