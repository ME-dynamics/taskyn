import { observable, action, makeObservable } from "mobx";

export class ProfileState {
  constructor() {
    makeObservable(this, {
      avatar: observable,
      firstName: observable,
      lastName: observable,
      description: observable,
      setAvatar: action,
      setFirstName: action,
      setLastName: action,
      setDescription: action,
    });
  }
  avatar: string = "";
  firstName: string = "";
  lastName: string = "";
  description: string = "";
  setAvatar(avatar: string) {
    this.avatar = avatar;
  }
  setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
  }
  setDescription(description: string) {
    this.description = description;
  }
}
