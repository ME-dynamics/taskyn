import { observable, action, makeObservable } from "mobx";

export class QuestionnaireState {
  constructor() {
    makeObservable(this, {
      currentQuestion: observable,
      answers: observable,
      setCurrentQuestion: action,
      setAnswer: action,
    });
  }
  currentQuestion: number = 1;
  answers: Record<string, string> = {};
  setCurrentQuestion(currentQuestion: number) {
    this.currentQuestion = currentQuestion;
  }
  setAnswer(question: number, answer: string) {
    this.answers[`${question}`] = answer;
  }
}
