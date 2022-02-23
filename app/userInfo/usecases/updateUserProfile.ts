import { toGregorian } from "jalaali-js";
import { fetchCreatePatient, fetchUpdateUser } from "../adapters";
import { userInfoState } from "../entities";

export async function updateUserProfile(customerId: string) {
  if (!userInfoState.maritalStatus) {
    return "marital status is required";
  }
  if (!userInfoState.maritalState) {
    return "marital state is required";
  }
  if (!userInfoState.education) {
    return "education is required";
  }
  if (!userInfoState.religion) {
    return "religion is required";
  }
  if (typeof userInfoState.isFatherAlive === "undefined") {
    return "isFatherAlive is required";
  }
  if (typeof userInfoState.isMotherAlive === "undefined") {
    return "isMotherAlive is required";
  }
  if (typeof userInfoState.cousinMarriage === "undefined") {
    return "cousinMarriage is required";
  }
  if (!userInfoState.siblingsPosition) {
    return "siblingsPosition is required";
  }
  if (!userInfoState.gender) {
    return "gender is required";
  }
  if (!userInfoState.siblingDiseases) {
    return "siblingDiseases is required";
  }
  console.log("update user usecase");
  const { error, patient } = await fetchCreatePatient(
    {
      siblingDiseases: userInfoState.siblingDiseases,
      problemDescription: userInfoState.problemDescription,
      maritalStatus: userInfoState.maritalStatus,
      maritalState: userInfoState.maritalState,
      education: userInfoState.education,
      academicField: userInfoState.academicField,
      religion: userInfoState.religion,
      job: userInfoState.job,
      bodyDiseases: userInfoState.bodyDiseases,
      mindDiseases: userInfoState.mindDiseases,
      drugUse: userInfoState.drugUse,
      addiction: userInfoState.addiction,
      isFatherAlive: userInfoState.isFatherAlive,
      isMotherAlive: userInfoState.isMotherAlive,
      fatherDeathReason: userInfoState.fatherDeathReason,
      motherDeathReason: userInfoState.motherDeathReason,
      cousinMarriage: userInfoState.cousinMarriage,
      siblingsPosition: userInfoState.siblingsPosition,
      siblings: userInfoState.siblings,
    },
    customerId
  );
  const [year, month, day] = userInfoState.birthday.split("-");
  const birthDate = toGregorian(
    parseInt(year, 10),
    parseInt(month, 10),
    parseInt(day, 10)
  );
  const { error: userError, user } = await fetchUpdateUser(
    {
      firstName: userInfoState.firstName,
      lastName: userInfoState.lastName,
      address: userInfoState.address,
      telephone: userInfoState.telephone,
      birthday:  new Date(
        `${birthDate.gy}-${birthDate.gm}-${birthDate.gd}`
      ).toISOString(),
      gender: userInfoState.gender,
    },
    customerId
  );
  console.log(error, patient);
  console.log(userError, user);
}
