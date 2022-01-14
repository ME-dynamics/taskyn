import { fetchUser } from "../adapters";
import { profileState } from "../entities";

export async function retrieveUser() {
  const { error, user } = await fetchUser();
  if (error || !user) {
    console.log(error);
    return;
  }
  profileState.setAvatar(user.avatar);
  profileState.setFirstName(user.firstName);
  profileState.setLastName(user.lastName);
  profileState.setDescription(user.description);
}
