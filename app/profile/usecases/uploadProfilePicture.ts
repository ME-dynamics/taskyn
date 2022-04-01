import { openGallery, openCamera } from "../../library";

import { uploadProfile } from "../adapters";
import { profileState } from "../entities";

export async function uploadProfilePicture(
  mode: "camera" | "gallery",
  onClosePress: () => void
) {
  try {
    const image =
      mode === "gallery"
        ? await openGallery("profile")
        : await openCamera("profile");
    if (!Array.isArray(image)) {
      const path = image.path;
      profileState.setProfilePictureUrl(path);

      profileState.setUploadLoadingImage(true);
      onClosePress();
      const url = await uploadProfile(path);
      profileState.setUploadLoadingImage(false);
      profileState.setProfilePictureUrl(url);
    }
  } catch (error) {
    // TODO: log event req cancelled
  }
}
