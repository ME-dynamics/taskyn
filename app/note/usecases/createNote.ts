import { fetchCreateNote } from "../adapters";
import { note as noteState } from "../entities";

export async function createNote(customerId: string) {
  const { error, note } = await fetchCreateNote({
    customerId: "ed7f0bae-4be3-4846-a263-5435a08c9f16",
    title: noteState.noteTitle,
    content: noteState.noteContent,
    imageIds: noteState.imageIds,
  });
  if (error) {
    console.log(error);
  }
  noteState.addNote(note);
  noteState.reset();
}
