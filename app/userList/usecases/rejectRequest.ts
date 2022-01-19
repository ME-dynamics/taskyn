import { fetchRejectRequest } from "../adapters";
import { customerRequestState } from "../entities";

export async function rejectRequest(customerId: string) {
  const success = await fetchRejectRequest(customerId);
  if (success) {
    // remove request
  }
}
