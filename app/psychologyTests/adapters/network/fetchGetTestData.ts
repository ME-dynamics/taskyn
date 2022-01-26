import { request } from "../../../library";
import { parseTestHistory } from "../utils";

export async function fetchGetTestData(customerId: string) {
  const { error, httpStatus, payload, success } = await request({
    endpoint: `/formData/${customerId}`,
    method: "GET",
    body: undefined,
  });
  if (!success || !Array.isArray(payload)) {
    return {
      error,
    };
  }
  const testHistory = [];
  for (let index = 0; index < payload.length; index++) {
    const item = payload[index];
    testHistory.push(parseTestHistory(item));
  }
  const TestHistory = Array.isArray(payload) ? payload : [];
  return {
    error: undefined,
    TestHistory: testHistory,
  };
}
