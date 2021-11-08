import { note } from "../entities";
import { openGallery, uploadFile } from "../../library";

export async function onGalleryPress() {
  const images = await openGallery("note");
  const uploadPromises = [];
  if (Array.isArray(images)) {
    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      note.addImage(image.path);
      uploadPromises.push(uploadFile({ path: image.path, type: "image" }));
    }
    const result = await Promise.all(uploadPromises);
    // TODO: add results to note images;
    return;
  }
  note.addImage(images.path);
  await uploadFile({ path: images.path, type: "image" });
}
