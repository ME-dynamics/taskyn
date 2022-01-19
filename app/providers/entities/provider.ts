import { action, makeObservable, observable } from "mobx";
import { IProvider } from "../types";

export class ProviderState {
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
  providers: IProvider[] = [];
  myProvider: IProvider | undefined = undefined;
  requestConfirmed: boolean = false;
  setProviders(newProviders: IProvider[]) {
    this.providers = newProviders;
  }
  setMyProvider(myProvider: IProvider) {
    this.myProvider = myProvider;
  }
  setRequestConfirmed(request: boolean) {
    this.requestConfirmed = request;
  }
}
