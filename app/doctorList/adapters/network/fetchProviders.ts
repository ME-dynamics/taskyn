import { request, toString, toJalaaliDate } from "../../../library";
import { IFetchProviders, IUser } from "../../types";

export async function fetchProviders(): Promise<IFetchProviders> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/users/providers",
    body: undefined,
    method: "GET",
  });
  if (!success) {
    return { error, providers: [] };
  }
  if (Array.isArray(payload)) {
    const result: IUser[] = [];
    for (let index = 0; index < payload.length; index++) {
      const provider = payload[index];
      const birthday =
        Date.parse(provider?.birthday) !== NaN
          ? toJalaaliDate(new Date(provider?.birthday))
          : "";
      const createdAt = new Date(provider?.createdAt);
      const modifiedAt = new Date(provider?.modifiedAt);
      result.push({
        id: toString(provider?.id),
        role: toString(provider?.role),
        username: toString(provider?.username),
        firstName: toString(provider?.firstName),
        lastName: toString(provider?.lastName),
        description: toString(provider?.description),
        gender: provider?.gender === "male" ? "male" : "female",
        birthday,
        profilePictureUrl: toString(provider?.profilePictureUrl),
        address: toString(provider?.address),
        telephone: toString(provider?.telephone),
        createdAt,
        modifiedAt,
      });
    }
    return {
      error: "",
      providers: result,
    };
  }
  return {
    error: "دکتر یافت نشد!",
    providers: [],
  };
}
