import { toString } from "../../../library";
import { IUser } from "../../types";

export function parseUser(payload: Record<string, unknown>): IUser {
  const gender = toString(payload.gender) === "male" ? "male" : "female";
  return {
    firstName: toString(payload.firstName),
    lastName: toString(payload.lastName),
    address: toString(payload.address),
    telephone: toString(payload.telephone),
    birthday: toString(payload.birthday),
    gender,
  };
}
