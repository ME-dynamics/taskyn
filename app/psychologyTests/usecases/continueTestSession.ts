import { storage } from "../../library";
import { questionnaireState } from "../entities";

export function continueTestSession(testId: string, fieldSize: number) {
  for (let index = 1; index < fieldSize; index++) {
    const answer = storage.retrieve(`${testId}@${index}`, "string");
    if (typeof answer === "string") {
      questionnaireState.setAnswer(index, answer);
    }
  }
  const currentQuestionIndex = Object.keys(questionnaireState.answers).length
  questionnaireState.setCurrentQuestion(
    currentQuestionIndex === fieldSize ? fieldSize : currentQuestionIndex + 1
  );
}
