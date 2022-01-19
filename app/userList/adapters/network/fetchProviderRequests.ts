import { request } from "../../../library";
import { parseRequest } from "../utils";

export async function fetchProviderRequests() {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/provider/requests",
    method: "GET",
    body: undefined,
  });
  if (!success || !payload) {
    return {
      error,
      requests: [],
    };
  }
  return {
    error,
    requests: parseRequest(payload),
  };
}
