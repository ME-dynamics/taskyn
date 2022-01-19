import { noteState } from "../entities";

export function onRemovePress(path: string) {
  noteState.removeImage(path);
}
