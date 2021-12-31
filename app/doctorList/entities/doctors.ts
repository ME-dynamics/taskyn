import { action, makeObservable, observable } from "mobx";
import { IUser } from "../types";

export class Doctors {
  constructor() {
    makeObservable(this, {
      doctors: observable,
      myDoctor: observable,
      requestConfirmed: observable,
      setDoctors: action,
      setMyDoctor: action,
      setRequestConfirmed: action,
    });
  }
  doctors: IUser[] = [];
  myDoctor: IUser | undefined = undefined;
  requestConfirmed: boolean = false;
  setDoctors(newDoctors: IUser[]) {
    this.doctors = newDoctors;
  }
  setMyDoctor(myDoctor: IUser) {
    this.myDoctor = myDoctor;
  }
  setRequestConfirmed(request: boolean) {
    this.requestConfirmed = request;
  }
}
