import { observable, action, makeObservable } from "mobx";
import type { INote } from "../types";

export class NoteListState {
  constructor() {
    makeObservable(this, {
      notes: observable,
      setNotes: action,
      addNote: action,
      updateNote: action,
      getNote: action,
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
  updateNote(note: INote) {
    for (let index = 0; index < this.notes.length; index++) {
      const { id } = this.notes[index];
      if (note.id === id) {
        this.notes[index] = note;
        return;
      }
    }
  }
  getNote(id: string) {
    for (let index = 0; index < this.notes.length; index++) {
      const { id: noteId } = this.notes[index];
      if (id === noteId) {
        return this.notes[index];
      }
    }
    return undefined;
  }
}
