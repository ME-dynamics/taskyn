import { uploadNoteImage } from "../adapters";
import { note } from "../entities";
import { openCamera } from "../../library";
export async function onCameraPress() {
  try {
    const image = await openCamera("note");
    note.addImage(image.path);
    await uploadNoteImage(image.path);
  } catch (error) {
    console.log(error);
  }
}
