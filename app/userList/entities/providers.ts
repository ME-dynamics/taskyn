import { action, makeObservable, observable } from "mobx";
import { IUser } from "../types";

export class Providers {
  constructor() {
    makeObservable(this, {
      providers: observable,
      myProvider: observable,
      requestConfirmed: observable,
      setProviders: action,
      setMyProvider: action,
      setRequestConfirmed: action,
    });
  }
  providers: IUser[] = [];
  myProvider: IUser | undefined = undefined;
  requestConfirmed: boolean = false;
  setProviders(newProviders: IUser[]) {
    this.providers = newProviders;
  }
  setMyProvider(myProvider: IUser) {
    this.myProvider = myProvider;
  }
  setRequestConfirmed(request: boolean) {
    this.requestConfirmed = request;
  }
}
