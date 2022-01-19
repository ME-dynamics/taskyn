import { fetchProviders } from "../adapters";
import { providersState } from "../entities";

export async function retrieveProviders() {
  const { error, providers } = await fetchProviders();
  if (error) {
    providersState.setProviders([]);
    return;
  }
  providersState.setProviders(providers);
}
