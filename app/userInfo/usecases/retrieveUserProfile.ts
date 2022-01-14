import { fetchPatient, fetchUser } from "../adapters";
import { userInfoState } from "../entities";

export async function retrieveUserProfile() {
  const [patient, user] = await Promise.all([fetchPatient(), fetchUser()]);
  if (patient.error || user.error) {
    console.log(patient.error, user.error);
    return "error";
  }
  const userData = user.user;
  const patientData = patient.patient;
  if (!userData || !patientData) {
    console.log(userData, patientData);
    return "error";
  }
  userInfoState.setFirstName(userData.firstName);
  userInfoState.setLastName(userData.lastName);
  userInfoState.setAddress(userData.address);
  userInfoState.setTelephone(userData.telephone);
  userInfoState.setBirthday(userData.birthday);
  userInfoState.setGender(userData.gender);
  userInfoState.setProblemDescription(patientData.problemDescription);
  userInfoState.setMaritalStatus(patientData.maritalStatus);
  userInfoState.setMaritalState(patientData.maritalState || "");
  userInfoState.setEducation(patientData.education || "");
  userInfoState.setAcademicField(patientData.academicField || "");
  userInfoState.setReligion(patientData.religion || "");
  userInfoState.setJob(patientData.job);
  userInfoState.setBodyDiseases(patientData.bodyDiseases || "");
  userInfoState.setMindDiseases(patientData.mindDiseases || "");
  userInfoState.setDrugUse(patientData.drugUse || "");
  userInfoState.setAddiction(patientData.addiction || "");
  userInfoState.setIsFatherAlive(patientData.isFatherAlive);
  userInfoState.setIsMotherAlive(patientData.isMotherAlive);
  userInfoState.setFatherDeathReason(patientData.fatherDeathReason || "");
  userInfoState.setMotherDeathReason(patientData.motherDeathReason || "");
  userInfoState.setCousinMarriage(patientData.cousinMarriage);
  userInfoState.setSiblingsPosition(patientData.siblingsPosition);
  userInfoState.setSiblings(patientData.siblings);
}
