import { observable, action, computed, makeObservable } from "mobx";
import { INoteImage, INote } from "../types";
export class NoteState {
  constructor() {
    makeObservable(this, {
      images: observable,
      notes: observable,
      noteTitle: observable,
      noteContent: observable,
      hasImages: computed,
      imageIds: computed,
      addImage: action,
      addImageId: action,
      removeImage: action,
      replaceImage: action,
      addNote: action,
      setNoteTitle: action,
      setNoteContent: action,
      reset: action,
    });
  }

  images: INoteImage[] = [];
  notes: INote[] = [];
  noteTitle: string = "";
  noteContent: string = "";
  get hasImages(): boolean {
    return this.images.length !== 0;
  }
  get imageIds(): string[] {
    const imageIds: string[] = [];
    for (let index = 0; index < this.images.length; index++) {
      const { id } = this.images[index];
      imageIds.push(id);
    }
    return imageIds;
  }
  addImage(newImagePath: string) {
    for (let index = 0; index < this.images.length; index++) {
      const { id, path } = this.images[index];
      if (path === newImagePath) {
        return;
      }
    }
    this.images.push({ id: "", path: newImagePath });
  }
  addImageId(imagePath: string, id: string) {
    for (let index = 0; index < this.images.length; index++) {
      const { path } = this.images[index];
      if (path === imagePath) {
        this.images[index].id = id;
        return;
      }
    }
  }
  removeImage(path: string) {
    const images: INoteImage[] = [];
    for (let index = 0; index < this.images.length; index++) {
      const image = this.images[index];
      if (image.path === path) {
        continue;
      }
      images.push(image);
    }
    this.images = images;
  }

  replaceImage(oldPath: string, newPath: string) {
    const images: INoteImage[] = [];
    for (let index = 0; index < this.images.length; index++) {
      const image = this.images[index];
      if (image.path === oldPath) {
        images.push({ id: "", path: newPath });
        continue;
      }
      images.push(image);
    }
    this.images = images;
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
  setNoteTitle(title: string) {
    this.noteTitle = title;
  }
  setNoteContent(content: string) {
    this.noteContent = content;
  }
  reset() {
    this.images = [];
    this.noteTitle = "";
    this.noteContent = "";
  }
}
