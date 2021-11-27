import { ReactElement } from "react";

export interface ISelectButtonProps {
  mode: "checkbox" | "radio";
  Label: () => ReactElement;
  selected: boolean;
  size: number;
  onPress?: () => void;
}
