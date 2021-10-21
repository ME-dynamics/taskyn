import { uploadNoteImage } from "../adapters";
import { note } from "../entities";
import { openCropper } from "../../library";

export async function onCropPress(path: string) {
  try {
    const image = await openCropper("note", path);
    note.replaceImage(path, image.path);
    await uploadNoteImage(path);
  } catch (error) {
    console.log(error);
  }
}
