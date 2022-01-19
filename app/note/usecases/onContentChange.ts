import { noteState} from "../entities";

export function onContentChange(text: string) {
  noteState.setNoteContent(text);
}
