import { validatePhoneNumber } from "../adapters";
import { input } from "../entities";

export function onPhoneChange(value: string) {
  if (value.length >= 11) {
    const isValid = validatePhoneNumber(value);
    if (!isValid) {
      input.setPhoneValidation(["شماره اشتباه است"]);
    } else {
        input.setPhoneValidation([]);
    }
  }
  input.setPhoneNumber(value);
}
