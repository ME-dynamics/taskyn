import { IPatients } from "../../entities/types";

export interface IPatientCardProps extends IPatients{
  onPress?: () => any;
  //status: "active" | " deactivate";
}
