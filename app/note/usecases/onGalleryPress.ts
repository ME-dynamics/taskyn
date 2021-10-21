import { uploadNoteImage } from "../adapters";
import { note } from "../entities";
import { openGallery } from "../../library";

export async function onGalleryPress() {
  const images = await openGallery("note");
  if (Array.isArray(images)) {
    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      note.addImage(image.path);
      await uploadNoteImage(image.path);
    }
    return;
  }
  note.addImage(images.path);
  await uploadNoteImage(images.path);
}
