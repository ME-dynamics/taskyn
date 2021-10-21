import { note } from "../entities";

export function onRemovePress(path: string) {
  note.removeImage(path);
}
