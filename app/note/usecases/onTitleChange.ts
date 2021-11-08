import { note } from "../entities";



export function onTitleChange(text: string) {
    note.setNoteTitle(text);
}