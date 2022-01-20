import { ICustomer } from ".";

export interface IFetchGetRequests {
  error: string;
  customers: ICustomer[];
}
