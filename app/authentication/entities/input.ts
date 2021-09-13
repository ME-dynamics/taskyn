import { makeObservable, observable } from "mobx";

export class Input {
  constructor() {
    makeObservable(this, {
      phoneNumber: observable,
      otpNumber: observable,
      phoneValidation: observable,
    });
  }
  phoneNumber: string = "";
  otpNumber: number = -1;
  phoneValidation: string[] = [];
  setPhoneNumber(phone: string) {
    this.phoneNumber = phone;
  }
  setPhoneValidation(validation: string[]) {
    this.phoneValidation = validation;
  }
}
