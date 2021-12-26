import { fetchProviders } from "../adapters";
import { doctorsState } from "../entities";

export async function retrieveProviders() {
  const { error, providers } = await fetchProviders();
  if (error) {
    console.log(error);
    doctorsState.setDoctors([]);
    return;
  }
  doctorsState.setDoctors(providers);
}
