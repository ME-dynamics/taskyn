import { fetchProviderRequests } from "../adapters";
import { customerRequestState } from "../entities";

export async function retrieveProviderRequests() {
  const { error, requests } = await fetchProviderRequests();
  if (error) {
    return;
  }
  customerRequestState.setRequests(requests);
}
