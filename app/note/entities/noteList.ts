import { observable, action, makeObservable } from "mobx";
import type { INote } from "../types";

export class NoteListState {
  constructor() {
    makeObservable(this, {
      notes: observable,
      setNotes: action,
      addNote: action,
    });
  }
  notes: INote[] = [];
  setNotes(notes: INote[]) {
    this.notes = notes;
  }
  addNote(note: INote) {
    for (let index = 0; index < this.notes.length; index++) {
      const { id } = this.notes[index];
      if (note.id === id) {
        return;
      }
    }
    this.notes.push(note);
  }
}
