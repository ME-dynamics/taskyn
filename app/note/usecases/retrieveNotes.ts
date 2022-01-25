import { fetchGetNotes } from "../adapters";
import { noteListState } from "../entities";

export async function retrieveNotes(customerId: string) {
  const { error, notes } = await fetchGetNotes(customerId);
  if (error) {
    // TODO: handle error
    // console.log(error);
    return;
  }
  noteListState.setNotes(notes);
}
