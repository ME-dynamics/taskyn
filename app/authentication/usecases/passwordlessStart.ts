import { fetchPasswordlessStart } from "../adapters"
import { auth } from "../entities"




export async function passwordlessStart() {
    if(auth.phoneNumber) {
        const {otpToken , error} = await fetchPasswordlessStart(auth.phoneNumber);
        if(error) {
            // set error
            return;
        }
        auth.setOtpToken(otpToken);

        // change state to number mode
    }
}