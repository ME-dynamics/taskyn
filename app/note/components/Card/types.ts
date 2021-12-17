import { ReactElement } from "react";
import { IIconProps } from "../../../library/IconButton/types";

export interface INoteProps {
  id?: string;
  Icon: (props: IIconProps) => ReactElement;
  title: string;
  description: string;
  onPress?: () => any;
  date: string;
}
