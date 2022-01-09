import { questionnaireState } from "../entities";

export function onNextQuestion() {
  questionnaireState.setCurrentQuestion(questionnaireState.currentQuestion + 1);
}
