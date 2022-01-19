import { observable, action, makeObservable } from "mobx";

import { ICustomerRequest } from "../types";

export class CustomerRequestState {
  constructor() {
    makeObservable(this, {
      requests: observable,
      setRequests: action,
    });
  }
  requests: ICustomerRequest[] = [];
  setRequests(requests: ICustomerRequest[]) {
    this.requests = requests;
  }
}
