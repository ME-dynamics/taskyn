import { observable, action, makeObservable } from "mobx";
import type { INote } from "../types";

export class NoteListState {
  constructor() {
    makeObservable(this, {
      currentNote: observable,
      notes: observable,
      setNotes: action,
      addNote: action,
      updateNote: action,
      setCurrentNote: action,
      setCurrentNoteTitle: action,
      setCurrentNoteContent: action,
      setEditable: action,
      updateCurrentNoteImageIds: action
    });
  }
  notes: INote[] = [];
  currentNote: (INote & { edit: boolean }) | undefined = undefined;
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
  setCurrentNote(id: string) {
    for (let index = 0; index < this.notes.length; index++) {
      const note = this.notes[index];
      if (id === note.id) {
        this.currentNote = { ...note, edit: false };
        return;
      }
    }
    this.currentNote = undefined;
  }
  setCurrentNoteTitle(title: string) {
    if (this.currentNote) {
      this.currentNote.title = title;
    }
  }
  setCurrentNoteContent(content: string) {
    if (this.currentNote) {
      this.currentNote.content = content;
    }
  }
  setEditable(state: boolean) {
    if (this.currentNote) {
      this.currentNote.edit = state;
    }
  }
  updateCurrentNoteImageIds(imageIds: string[]) {
    if (this.currentNote) {
      this.currentNote.imageIds = imageIds;
    }
  }
}
