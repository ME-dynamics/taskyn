// adatpers
import { fetchGetCustomers } from "../adapters/network/fetchGetRequests";
import { customerState } from "../entities";

export async function retrieveCustomers() {
  const { error, customers } = await fetchGetCustomers();
  console.log(error);
  if (error) {
    customerState.setCustomers([]);
    return;
  }
  customerState.setCustomers(customers);
}
