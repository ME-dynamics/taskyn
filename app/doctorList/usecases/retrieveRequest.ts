import { fetchRequest, fetchUser } from "../adapters";
import { doctorsState } from "../entities";

export async function retrieveRequest() {
  const { error: requestError, request } = await fetchRequest();
  if (requestError) {
  }
  const { providerId, requestConfirmed } = request;
  const { error: userError, user } = await fetchUser(providerId);
  if (userError || !user) {
    return;
  }
  doctorsState.setMyDoctor(user);
  doctorsState.setRequestConfirmed(requestConfirmed);
}
