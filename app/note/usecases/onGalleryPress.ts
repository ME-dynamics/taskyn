import { fetchUploadImage } from "../adapters";
import { note } from "../entities";
import { openGallery } from "../../library";

export async function onGalleryPress() {
  const images = await openGallery("note");
  const uploadPromises = [];
  if (Array.isArray(images)) {
    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      note.addImage(image.path);
      uploadPromises.push(fetchUploadImage(image.path));
    }
    try {
      const result = await Promise.all(uploadPromises);
      for (let index = 0; index < result.length; index++) {
        const { error, payload } = result[index];
        if (error) {
          if (error === "timeout") {
            note.reset();
          }
          continue;
        }
        note.addImageId(images[index].path, payload.id);
      }
    } catch (error) {
      console.warn(error);
    }

    // TODO: add results to note images;
    return;
  }
  note.addImage(images.path);
  await fetchUploadImage(images.path);
}
