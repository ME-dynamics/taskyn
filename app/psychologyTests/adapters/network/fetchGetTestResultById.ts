import { request } from "../../../library";
import { IFetchGetTestResultById } from "../../types";
import { parseTestResult } from "../utils";

export async function fetchGetTestResultById(): Promise<IFetchGetTestResultById> {
  const { error, httpStatus, payload, success } = await request({
    endpoint: "",
    method: "GET",
    body: undefined,
  });
  if (!success || !Array.isArray(payload)) {
    return {
      error,
      testResult: [],
    };
  }
  const testResult = [];
  for (let index = 0; index < payload?.length; index++) {
    const element = payload[index];
    testResult.push(parseTestResult(element));
  }
  return {
    error,
    testResult,
  };
}
