import { patientsState } from "../entities";

export async function search(value: string) {
  // call api and search
  patientsState.setPatients([]);
}
