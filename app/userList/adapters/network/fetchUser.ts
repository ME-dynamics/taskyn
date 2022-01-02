import { request, toJalaaliDate, toString } from "../../../library";

import { IFetchUser } from "../../types";

export async function fetchUser(id: string): Promise<IFetchUser> {
  const { success, error, httpStatus, payload } = await request({
    method: "GET",
    endpoint: `/users/${id}`,
    body: undefined,
  });
  if (!success) {
    return {
      error,
      user: undefined,
    };
  }
  const birthday =
    Date.parse(toString(payload?.birthday)) !== NaN
      ? toJalaaliDate(new Date(toString(payload?.birthday)))
      : "";
  const createdAt = new Date(toString(payload?.createdAt));
  const modifiedAt = new Date(toString(payload?.modifiedAt));
  return {
    error: "",
    user: {
      id: toString(payload?.id),
      role: toString(payload?.role),
      username: toString(payload?.username),
      firstName: toString(payload?.firstName),
      lastName: toString(payload?.lastName),
      description: toString(payload?.description),
      gender: payload?.gender === "male" ? "male" : "female",
      birthday,
      profilePictureUrl: toString(payload?.profilePictureUrl),
      address: toString(payload?.address),
      telephone: toString(payload?.telephone),
      createdAt,
      modifiedAt,
    },
  };
}
