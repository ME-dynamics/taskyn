import { fetchUploadImage } from "../adapters";
import { note } from "../entities";
import { openCropper } from "../../library";

export async function onCropPress(path: string) {
  try {
    const image = await openCropper("note", path);
    note.replaceImage(path, image.path);
    const { error, payload } = await fetchUploadImage(image.path);
    if (error) {
      // TODO: do something with this error
      return;
    }
    note.addImageId(image.path, payload.id);
  } catch (error) {
    console.log(error);
  }
}
