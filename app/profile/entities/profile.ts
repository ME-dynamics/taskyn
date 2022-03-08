import { observable, action, makeObservable } from "mobx";

export class ProfileState {
  constructor() {
    makeObservable(this, {
      profilePictureUrl: observable,
      firstName: observable,
      lastName: observable,
      description: observable,
      setProfilePictureUrl: action,
      setFirstName: action,
      setLastName: action,
      setDescription: action,
    });
  }
  profilePictureUrl: string = "";
  firstName: string = "";
  lastName: string = "";
  description: string = "";
  setProfilePictureUrl(avatar: string) {
    this.profilePictureUrl = avatar;
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
