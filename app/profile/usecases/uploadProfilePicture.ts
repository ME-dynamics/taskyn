import { openGallery } from "../../library";

import { uploadProfile } from "../adapters";
import { profileState } from "../entities";
import { updateUser } from "./updateUser";

export async function uploadProfilePicture() {
  const image = await openGallery("profile");
  if (!Array.isArray(image)) {
    const path = image.path;
    profileState.setAvatar(path);
    const url = await uploadProfile(path);
    profileState.setAvatar(url);
  }
  await updateUser();
}
