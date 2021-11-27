import { request } from "../../../library";
import { IFetchProviders } from "../../types";

export async function fetchProviders(): Promise<IFetchProviders> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/users/providers",
    body: undefined,
    method: "GET",
  });
  if (!success) {
    return {};
  }
}
