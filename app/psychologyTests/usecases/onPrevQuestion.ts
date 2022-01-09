import { questionnaireState } from "../entities";



export function onPrevQuestion() {
    questionnaireState.setCurrentQuestion(
      questionnaireState.currentQuestion - 1
    );
  }