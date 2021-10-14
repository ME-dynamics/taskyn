import { ICards } from "./../entities/types";

export interface ICardProps extends ICards {
  onPress?: () => any;
  //status: "active" | " deactivate";
}
