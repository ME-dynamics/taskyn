import { storage } from "../../library";
import { questionnaireState } from "../entities";

export function onSetAnswer(answer: string, testId: string) {
  storage.add(`${testId}@${questionnaireState.currentQuestion}`, answer);
  questionnaireState.setAnswer(questionnaireState.currentQuestion, answer);
}
