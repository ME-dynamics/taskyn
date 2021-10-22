import { fetchPasswordlessStart, validatePhoneNumber } from "../adapters";
import { input, auth } from "../entities";

export async function passwordlessStart() {
  if (input.phoneNumber && input.phoneNumber.length >= 10) {
    const isPhoneValid = validatePhoneNumber(input.phoneNumber);
    if (!isPhoneValid) {
      input.setPhoneValidation(["شماره تماس اشتباه است."]);
    } else {
      input.setPhoneValidation([]);
    }
    if (isPhoneValid) {
      const { otpToken, error } = await fetchPasswordlessStart(
        input.phoneNumber
      );
      if (error) {
        input.setPhoneValidation([`${error} ارور سرور`]);
        return;
      }
      if (otpToken) {
        auth.setOtpToken(otpToken);
        return;
      }
    }
  }
}
