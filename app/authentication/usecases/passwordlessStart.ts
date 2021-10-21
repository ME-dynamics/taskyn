import { fetchPasswordlessStart } from "../adapters";
import { input, auth } from "../entities";

export async function passwordlessStart() {
  if (input.phoneNumber) {
    const { otpToken, error } = await fetchPasswordlessStart(input.phoneNumber);
    if (error) {
      // set error
      return;
    }
    if (otpToken) {
      auth.setOtpToken(otpToken);
      return;
    }
    // change state to number mode
  }
}
