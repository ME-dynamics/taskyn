import { input } from "../entities"


export function onPhoneChange(value: string) {
    // check if phone is valid
    input.setPhoneNumber(value);
}