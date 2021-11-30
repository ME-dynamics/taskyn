import { ReactElement } from "react";

export interface ISelectButtonProps {
  id?: string;
  mode: "checkbox" | "radio";
  children: () => ReactElement;
  selected: boolean;
  size: number;
  onPress?: (id: string) => void;
}
