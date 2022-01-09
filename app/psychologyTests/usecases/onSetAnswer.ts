import { questionnaireState } from "../entities";

export function onSetAnswer(id: string) {
  // TODO: write every answer to database with current form
  questionnaireState.setAnswer(questionnaireState.currentQuestion, id);
}
