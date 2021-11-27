import { observable, action, makeObservable } from "mobx";
import { IUserInfo } from "../types";

export class UserInfo implements IUserInfo {
  constructor() {
    makeObservable(this, {});
  }
  firstName = undefined;
  lastName = undefined;
  description = undefined;
  gender = undefined;
  birthday = undefined;
  address = undefined;
  telephone = undefined;
  problemDescription = undefined;
  maritalStatus = undefined;
  maritalState = undefined;
  education = undefined;
  academicField = undefined;
  religion = undefined;
  job = undefined;
  bodyDiseases = undefined;
  mindDiseases = undefined;
  drugUse = undefined;
  addiction = undefined;
  isFatherAlive = undefined;
  isMotherAlive = undefined;
  fatherDeathReason = undefined;
  motherDeathReason = undefined;
  cousinMarriage = undefined;
  siblingsPosition = undefined;
  siblings = undefined;
}
