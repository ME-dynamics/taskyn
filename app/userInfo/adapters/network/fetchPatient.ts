import { request } from "../../../library";

import { parsePatient } from "../utils";

export async function fetchPatient(customerId: string | undefined) {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/patients/${customerId}`,
    method: "GET",
    body: undefined,
  });
  if (!success || !payload) {
    return {
      error,
      patient: undefined,
    };
  }
  return {
    error: "",
    patient: parsePatient(payload),
  };
}
