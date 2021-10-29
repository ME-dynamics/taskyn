export { Authentication } from "./screens";
import { auth } from "./entities";
export { initToken } from "./usecases";
export function getLoggedIn() {
  return auth.loggedIn;
}

export function getRole() {
  return auth.role;
}
export function getJWT() {
  return auth.token;
}
