import {
  fetchBeckAnxiety,
  fetchBeckDepressionII,
  fetchMBTI,
} from "../adapters";
import { testDetailState } from "../entities";
export async function retrieveTestDetail(id: string) {
  if (id.includes("mbti")) {
    const { error, mbti } = await fetchMBTI();
    if (error) {
      // TODO: handle error
    }
    testDetailState.setTest(mbti);
    return;
  }
  if (id.includes("beckDepressionII")) {
    const { error, beckDepressionII } = await fetchBeckDepressionII();
    if (error) {
      // TODO: handle error
    }
    testDetailState.setTest(beckDepressionII);
    return;
  }
  if (id.includes("beckAnxiety")) {
    const { error, beckAnxiety } = await fetchBeckAnxiety();
    if (error) {
      // TODO: handle error
    }
    testDetailState.setTest(beckAnxiety);
    return;
  }
  throw new Error("form is not available");
}
