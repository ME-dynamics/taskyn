import { action, makeObservable, observable } from "mobx";
import { IPatients } from "./types";

class Patients {
  constructor() {
    makeObservable(this, {
      patients: observable,
      setPatients: action,
    });
  }
  patients: IPatients[] = [];
  setPatients(newPatients: IPatients[]) {
    this.patients = newPatients;
  }
}


export const patientsState = new Patients();