import { fetchCreateRequest, fetchUser } from "../adapters";
import { doctorsState } from "../entities";

export async function createRequest(providerId: string) {
  const { error: createRequestError, request } = await fetchCreateRequest(
    providerId
  );
  if (createRequestError) {
    return;
  }
  const { providerId: id, requestConfirmed } = request;
  const { error: userError, user } = await fetchUser(id);
  if (userError || !user) {
    return;
  }
  doctorsState.setRequestConfirmed(requestConfirmed);
  doctorsState.setMyDoctor(user);
}
