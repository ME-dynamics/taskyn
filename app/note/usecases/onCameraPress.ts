import { fetchUploadImage } from "../adapters";
import { note } from "../entities";
import { openCamera } from "../../library";
export async function onCameraPress() {
  try {
    const image = await openCamera("note");
    note.addImage(image.path);
    const { error, payload } = await fetchUploadImage(image.path);
    if (error) {
      // TODO: do some error
      return;
    }
    note.addImageId(image.path, payload.id);
  } catch (error) {
    console.log(error);
  }
}
