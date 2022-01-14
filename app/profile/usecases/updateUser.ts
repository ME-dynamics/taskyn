import { fetchUpdateUser } from "../adapters";
import { profileState } from "../entities";

export async function updateUser() {
  const { error, user } = await fetchUpdateUser({
    avatar: profileState.avatar,
    firstName: profileState.firstName,
    lastName: profileState.lastName,
    description: profileState.description,
  });
  if (error) {
    console.log(error);
    return;
  }
}
