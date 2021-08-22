import { action, makeObservable, observable } from "mobx";

export class InputState {
  constructor() {
    makeObservable(this, {
      focused: observable,
      focus: action,
      blur: action,
    });
  }
  focused: boolean = false;
  focus() {
    this.focused = true;
  }
  blur() {
    this.focused = false;
  }
}
