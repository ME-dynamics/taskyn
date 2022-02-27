import { fetchGetTestData } from "../adapters";
import { testHistoryState } from "../entities";

export async function retiriveTestHistory(customerId: string) {
  const { error, testHistory } = await fetchGetTestData(customerId);
  if (error) {
    return error;
  }
  testHistoryState.setTestHistory(testHistory);
}
