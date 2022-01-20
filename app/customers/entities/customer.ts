import { observable, action, makeObservable, computed } from "mobx";
import type { ICustomer } from "../types";

export class CustomerState {
  constructor() {
    makeObservable(this, {
      customers: observable,
      setCustomers: action,
      customersCount: computed,
    });
  }
  customers: ICustomer[] = [];
  setCustomers(customers: ICustomer[]) {
    this.customers = customers;
  }
  get customersCount(): number {
    return this.customers.length;
  }
}
