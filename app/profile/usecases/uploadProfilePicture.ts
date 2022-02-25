import { openGallery, openCamera } from "../../library";

import { uploadProfile } from "../adapters";
import { profileState } from "../entities";
import { updateUser } from "./updateUser";

export async function uploadProfilePicture(mode: "camera" | "gallery") {
  try {
    const image =
      mode === "gallery"
        ? await openGallery("profile")
        : await openCamera("profile");
    if (!Array.isArray(image)) {
      const path = image.path;
      profileState.setAvatar(path);
      const url = await uploadProfile(path);
      profileState.setAvatar(url);
    }
    await updateUser();
  } catch (error) {
    // TODO: log event req cancelled
  }
}
