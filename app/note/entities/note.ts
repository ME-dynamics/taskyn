import { observable, action, computed, makeObservable, toJS } from "mobx";

export class NoteState {
  constructor() {
    makeObservable(this, {
      images: observable,
      hasImages: computed,
      addImage: action,
      removeImage: action,
      replaceImage: action,
    });
  }
  images: string[] = [];
  get hasImages(): boolean {
    return this.images.length !== 0;
  }
  addImage(newImagePath: string) {
    if (!this.images.includes(newImagePath)) {
      this.images.push(newImagePath);
    }
  }
  removeImage(path: string) {
    const images: string[] = [];
    for (let index = 0; index < this.images.length; index++) {
      const image = this.images[index];
      if (image === path) {
        continue;
      }
      images.push(image);
    }
    this.images = images;
  }
  replaceImage(oldPath: string, newPath: string) {
    const images: string[] = [];
    for (let index = 0; index < this.images.length; index++) {
      const image = this.images[index];
      if (image === oldPath) {
        images.push(newPath);
        continue;
      }
      images.push(image);
    }
    this.images = images;
  }
}
