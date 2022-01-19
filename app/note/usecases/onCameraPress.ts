import { fetchUploadImage } from "../adapters";
import { noteState } from "../entities";
import { openCamera } from "../../library";
export async function onCameraPress() {
  try {
    const image = await openCamera("note");
    noteState.addImage(image.path);
    // const { error, payload } = await fetchUploadImage(image.path);
    // if (error) {
    //   // TODO: do some error
    //   return;
    // }
    // noteState.addImageId(image.path, payload.id);
    noteState.toggleMenu(false);
  } catch (error) {
    console.log(error);
  }
}
