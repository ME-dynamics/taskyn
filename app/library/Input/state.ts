import { action, makeObservable, observable } from "mobx";

export class InputState {
  constructor() {
    makeObservable(this, {
      focused: observable,
      height: observable,
      focus: action,
      blur: action,
      setHeight: action,
    });
  }

  focused: boolean = false;
  height: number = 42;
  focus = () => {
    this.focused = true;
  };
  blur = () => {
    this.focused = false;
  };
  setHeight = (newHeight: number) => {
    this.height = newHeight;
  };
}
