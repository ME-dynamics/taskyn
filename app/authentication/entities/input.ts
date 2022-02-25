import { action, makeObservable, observable } from "mobx";

export class InputState {
  constructor() {
    makeObservable(this, {
      phoneNumber: observable,
      otpNumber: observable,
      phoneValidation: observable,
      otpValidation: observable,
      setPhoneNumber: action,
      setOtpNumber: action,
      setPhoneValidation: action,
      setOtpValidation: action,
      reset: action,
    });
  }
  phoneNumber: string = "";
  otpNumber: string = "";
  phoneValidation: string[] = [];
  otpValidation: string[] = [];
  setPhoneNumber(phone: string) {
    this.phoneNumber = phone;
  }
  setOtpNumber(otp: string) {
    this.otpNumber = otp;
  }
  setPhoneValidation(validation: string[]) {
    this.phoneValidation = validation;
  }
  setOtpValidation(validation: string[]) {
    this.otpValidation = validation;
  }
  reset() {
    this.phoneNumber = "";
    this.otpNumber = "";
    this.phoneValidation = [];
    this.otpValidation = [];
  }
}
