import { fetchCustomerRequest, fetchUser } from "../adapters";
import { providersState } from "../entities";

export async function retrieveRequest() {
  const { error: requestError, request } = await fetchCustomerRequest();
  if (requestError) {
  }
  const { providerId, requestConfirmed } = request;
  const { error: userError, user } = await fetchUser(providerId);
  if (userError || !user) {
    return;
  }
  providersState.setMyProvider(user);
  providersState.setRequestConfirmed(requestConfirmed);
}
