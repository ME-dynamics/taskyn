import { note } from "../entities";
import { openCamera, uploadFile } from "../../library";
export async function onCameraPress() {
  try {
    const image = await openCamera("note");
    note.addImage(image.path);
    await uploadFile({path: image.path, type: "image"});
  } catch (error) {
    console.log(error);
  }
}
