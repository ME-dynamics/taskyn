import { note } from "../entities";
import { openCropper, uploadFile } from "../../library";

export async function onCropPress(path: string) {
  try {
    const image = await openCropper("note", path);
    note.replaceImage(path, image.path);
    await uploadFile({ path, type: "image" });
  } catch (error) {
    console.log(error);
  }
}
