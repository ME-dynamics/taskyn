export { Authentication } from "./interfaces";
import { auth } from "./entities";
export { initToken } from "./usecases";
export function getLoggedIn() {
  return auth.loggedIn;
}

export function getJWT() {
  return auth.token;
}
