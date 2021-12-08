import { ReactElement } from "react";

export type tMode = "text" | "outlined" | "contained" | "contained-grey" | "contained-secondary";

interface IIconProps {
  color: string;
  size: number;
}

export type tSize = "extra-small" | "small" | "medium" | "big" | "wide" | "FAB";

export interface IButtonProps {
  mode: tMode;
  bold?: boolean;
  size: tSize;
  dark?: boolean;
  loading?: boolean;
  Icon?: (props: IIconProps) => ReactElement;
  onPress?: () => void;
  rippleColor: "lightGrey" | "grey" | "darkGrey";
  disabled?: boolean;
  children: string;
  textColor?: string;
  backgroundColor?: string;
  fullRadius?: boolean;
}

export interface IActivityProps {
  mode: tMode;
}

export interface IButtonStyles {
  mode: tMode;
  bold?: boolean;
  size: tSize;
  dark?: boolean;
  disabled?: boolean;
  textColor?: string;
  backgroundColor?: string;
  fullRadius?: boolean;
}
