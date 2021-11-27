import { fetchPasswordlessStart, validatePhoneNumber } from "../adapters";
import { inputState, authState } from "../entities";

export async function passwordlessStart() {
  if (inputState.phoneNumber && inputState.phoneNumber.length >= 10) {
    const isPhoneValid = validatePhoneNumber(inputState.phoneNumber);
    if (!isPhoneValid) {
      inputState.setPhoneValidation(["شماره تماس اشتباه است."]);
    } else {
      inputState.setPhoneValidation([]);
    }
    if (isPhoneValid) {
      const { otpToken, error } = await fetchPasswordlessStart(
        inputState.phoneNumber
      );
      if (error) {
        inputState.setPhoneValidation([`${error} ارور سرور`]);
        return;
      }
      if (otpToken) {
        authState.setOtpToken(otpToken);
        return;
      }
    }
  }
}
