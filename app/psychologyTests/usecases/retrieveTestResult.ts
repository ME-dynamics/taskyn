import { fetchGetTestResultById } from "../adapters";
import { testResultState } from "../entities";

export async function retrieveTestResult(testId: string) {
  const { error, testResult } = await fetchGetTestResultById(testId);
  if (error) {
    return {
      error,
      testResult: [],
    };
  }
  testResultState.setTestResult(testResult);
}
