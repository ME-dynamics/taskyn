import { ReactElement } from "react";
import { IIconProps } from "../../../library/IconButton/types";

export interface INoteProps {
  id: string;
  title: string;
  description: string;
  onPress: (id: string) => any;
  date: string;
}
