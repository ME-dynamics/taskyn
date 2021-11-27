import { observable, action, makeObservable } from "mobx";
import { IProvider } from "../types";

export class DashboardState {
  constructor() {
    makeObservable(this, {
      provider: observable,
      setProvider: action,
    });
  }
  provider: IProvider | undefined = undefined;
  setProvider(provider: IProvider) {
    this.provider = provider;
  }
}
