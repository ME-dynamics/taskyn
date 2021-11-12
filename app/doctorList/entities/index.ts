import { action, makeObservable, observable } from "mobx";
import { IDoctors } from "./types";

class Doctors {
  constructor() {
    makeObservable(this, {
      patients: observable,
      setPatients: action,
    });
  }
  patients: IDoctors[] = [];
  setPatients(newPatients: IDoctors[]) {
    this.patients = newPatients;
  }
}


export const patientsState = new Doctors();