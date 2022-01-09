import { observable, action, makeObservable } from "mobx";
import { IPsychologyTest } from "../types";

export class TestDetailState {
  constructor() {
    makeObservable(this, {
      test: observable,
      setTest: action,
      reset: action,
    });
  }
  test: IPsychologyTest = {
    id: "",
    title: {
      fa: "",
      en: "",
    },
    description: "",
    fields: {},
  };
  setTest(test: IPsychologyTest) {
    this.test = test;
  }
  reset() {
    this.test = {
      id: "",
      title: {
        fa: "",
        en: "",
      },
      description: "",
      fields: {},
    };
  }
}
