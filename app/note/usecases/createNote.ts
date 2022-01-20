import { fetchCreateNote } from "../adapters";
import { createNoteState, noteListState } from "../entities";

export async function createNote(customerId: string) {
  const { error, note } = await fetchCreateNote({
    customerId,
    title: createNoteState.noteTitle,
    content: createNoteState.noteContent,
    imageIds: createNoteState.imageIds,
  });
  if (error || !note) {
    console.log(error);
    return;
  }
  noteListState.addNote(note);
  createNoteState.reset();
}
