import { noteState } from "../entities";



export function onTitleChange(text: string) {
    noteState.setNoteTitle(text);
}