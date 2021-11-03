import { ReactElement } from "react";

export interface IIconProps {
  size: number;
  color: string;
}

export interface IIconButtonProps {
  onPress: () => void;
  Icon: (props: IIconProps) => ReactElement;
}
