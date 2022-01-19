import { fetchConfirmRequest } from "../adapters";

export async function confirmRequest(customerId: string) {
  const { error, confirmed } = await fetchConfirmRequest(customerId);
  if (error) {
    // TODO: handle error
  }
  return confirmed;
}
