import { toString } from "../../../library";
import { IUser } from "../../types";

export function parseUser(payload: Record<string, unknown>): IUser {
  return {
    avatar: toString(payload.avatar),
    firstName: toString(payload.firstName),
    lastName: toString(payload.lastName),
    description: toString(payload.description),
  };
}
