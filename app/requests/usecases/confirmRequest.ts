import { fetchConfirmRequest } from "../adapters";
import { requestState } from "../entities";
import { retrieveCustomers } from "../../customers"
export async function confirmRequest(customerId: string) {
  const { error, request } = await fetchConfirmRequest(customerId);
  if (error) {
    //TODO: handle error
  }
  await retrieveCustomers();
  requestState.removeRequest(request.customerId);
}
