import { fetchGetTestResultById } from "../adapters";

export async function retrieveTestResult() {
  const { error, testResult } = await fetchGetTestResultById();
  if (error) {
    return {
      error,
      testResult: [],
    };
  }
  return {
    testResult,
  };
}
