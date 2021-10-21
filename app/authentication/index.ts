export { Authentication } from "./interfaces";
import { auth } from "./entities";

export function getLoggedIn() {
  return auth.loggedIn;
}

export function getRoled() {
  return auth.role;
}
