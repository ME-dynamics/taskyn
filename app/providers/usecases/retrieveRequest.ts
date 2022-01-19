import { fetchRequest, fetchProvider } from "../adapters";
import { providerState } from "../entities";

export async function retrieveRequest() {
  const { error: requestError, request } = await fetchRequest();
  if (requestError || !request) {
    // TODO : handle error
    return;
  }
  const { providerId, requestConfirmed } = request;
  const { error: userError, provider } = await fetchProvider(providerId);
  if (userError || !provider) {
    return;
  }
  providerState.setRequestConfirmed(requestConfirmed);
  providerState.setMyProvider(provider);
}
