import { storage } from "../../library";
import { questionnaireState } from "../entities";

export function continueTestSession(testId: string, fieldSize: number) {
  for (let index = 1; index < fieldSize; index++) {
    const answer = storage.retrieve(`${testId}@${index}`, "string");
    if (typeof answer === "string") {
      questionnaireState.setAnswer(index, answer);
    }
  }
  questionnaireState.setCurrentQuestion(
    Object.keys(questionnaireState.answers).length + 1
  );
}
