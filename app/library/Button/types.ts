import { ReactElement } from "react";

export type tMode = "text" | "outlined" | "contained";

interface IIconProps {
  color: string;
  size: number;
}
export interface IButtonProps {
  mode: tMode;
  size: "small" | "medium" | "big";
  dark?: boolean;
  loading?: boolean;
  Icon?: (props: IIconProps) => ReactElement;
  onPress: () => void;
  rippleColor: "lightGrey" | "grey" | "darkGrey";
  disabled?: boolean;
  children: string;
  color?: string;
  fullRadius?: boolean;
}

export interface IActivityProps {
  mode: tMode;
}

export interface IButtonStyles {
  mode: "text" | "outlined" | "contained";
  size: "small" | "medium" | "big";
  dark?: boolean;
  disabled?: boolean;
  color?: string;
  fullRadius?: boolean;
}
