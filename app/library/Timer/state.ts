import { action, makeObservable, observable } from "mobx";
import { ITime } from "./types";

export class TimerState {
  constructor(args: ITime) {
    const { minute, second } = args;
    this.minute = minute;
    this.second = second;
    makeObservable(this, {
      minute: observable,
      second: observable,
      count: action,
    });
    this.interval = setInterval(this.count, 1000);
  }
  interval: NodeJS.Timer;
  minute: number = 0;
  second: number = 0;
  get formattedSecond() {
    if (this.second >= 10) {
      return this.second;
    }
    return `0${this.second}`;
  }
  count = () => {
    if (this.minute === 0 && this.second === 0) {
      clearInterval(this.interval);
    }
    if (this.second > 0) {
      --this.second;
    } else if (this.second === 0 && this.minute > 0) {
      --this.minute;
      this.second = 59;
    }
  };
  clear = () => {
    clearInterval(this.interval);
  };
}
