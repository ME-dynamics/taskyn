import { input } from "../entities";

export function onOtpNumberChange(otpNumber: string) {
  // validate
  input.setOtpNumber(otpNumber);
}
