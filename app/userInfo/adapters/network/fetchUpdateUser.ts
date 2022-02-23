import { request } from "../../../library";

import { IUser } from "../../types";

export async function fetchUpdateUser(body: IUser,customerId: String) {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/users/${customerId}`,
    method: "PUT",
    body: Object(body),
  });
  if (!success) {
    return {
      error,
      user: {},
    };
  }
  return {
    error: "",
    user: payload,
  };
}
