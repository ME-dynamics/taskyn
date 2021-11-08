import { note } from "../entities";

export function onContentChange(text: string) {
  note.setNoteContent(text);
}
