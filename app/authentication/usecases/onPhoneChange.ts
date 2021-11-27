import { validatePhoneNumber } from "../adapters";
import { inputState } from "../entities";

export function onPhoneChange(value: string) {
  if (value.length >= 11) {
    const isValid = validatePhoneNumber(value);
    if (!isValid) {
      inputState.setPhoneValidation(["شماره اشتباه است", "تست اروووور", "اروووووووووووووووور", "عرررررررررررررررر"]);
    } else {
        inputState.setPhoneValidation([]);
    }
  }
  inputState.setPhoneNumber(value);
}
