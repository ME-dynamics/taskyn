import { fetchGetTestData } from "../adapters";
import { testHistoryState } from "../entities";

export async function retiriveTestHistory(customerId: string) {
  const { error, TestHistory } = await fetchGetTestData(customerId);
  if (error) {
    return error;
  }
  //@ts-expect-error
  testHistoryState.setTestHistory(TestHistory);
}
