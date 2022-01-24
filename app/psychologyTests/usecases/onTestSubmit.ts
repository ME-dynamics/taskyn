import { fetchCreateMbti } from "../adapters";

import { mbtiState, questionnaireState, testDetailState } from "../entities";

// TODO: move selection process to a different usecase
export async function onTestSubmit() {
  const testId = testDetailState.test.id;
  if (testId.includes("mbti")) {
    const { error, mbtiResult } = await fetchCreateMbti(
      questionnaireState.answers
    );
    if (error) {
      // console.log(error);
      // TODO: handle error
      console.log(error);
    }
    // console.log(JSON.stringify(mbtiResult, null, 2));
    // TODO: set result to mbti result state
    //@ts-ignore // need fix type
    mbtiState.setMbtiResult(mbtiResult);
    return;
  }
  if (testId.includes("beckDepressionII")) {
    // const { } = await fetchCreateBeckDepressionII()
  }
  if (testId.includes("beckAnxiety")) {
    // const { } = await fetchCreateBeckAnxiety()
  }
  throw new Error("test is not available");
}
