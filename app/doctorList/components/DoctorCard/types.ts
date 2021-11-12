import { IDoctors } from "../../entities/types";

export interface IDoctorsCardProps extends IDoctors{
  onPress?: () => any;
  //status: "active" | " deactivate";
}
