import { fetchUploadImage } from "../adapters";
import { noteState } from "../entities";
import { openCropper } from "../../library";

export async function onCropPress(path: string) {
  try {
    const image = await openCropper("note", path);
    noteState.replaceImage(path, image.path);
    // const { error, payload } = await fetchUploadImage(image.path);
    // if (error) {
    //   // TODO: do something with this error
    //   return;
    // }
    // noteState.addImageId(image.path, payload.id);
  } catch (error) {
    console.log(error);
  }
}
