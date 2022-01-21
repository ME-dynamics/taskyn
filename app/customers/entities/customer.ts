import { observable, action, makeObservable } from "mobx";
import type { ICustomer } from "../types";

export class CustomerState {
  constructor() {
    makeObservable(this, {
      customers: observable,
      setCustomers: action,
      removeCustomer: action,
    });
  }
  customers: ICustomer[] = [];
  setCustomers(customers: ICustomer[]) {
    this.customers = customers;
  }
  removeCustomer(customerId: string) {
    this.customers = this.customers.filter(
      (customer) => customer.customerId !== customerId
    );
  }
}
