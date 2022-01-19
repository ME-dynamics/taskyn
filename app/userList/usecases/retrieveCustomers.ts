import { fetchCustomers } from "../adapters";

export async function retrieveCustomers() {
  const { error, customers } = await fetchCustomers();
  if (error) {
    // TODO: handle error
  }
  return customers;
}
