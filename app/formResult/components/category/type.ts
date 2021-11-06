export interface ICategoryProps {
  mode: "contained" | "outlined";
  onPress?: () => void;
  rippleColor: "lightGrey" | "grey" | "darkGrey";
  children: string;
  color?: string;
}
export interface  IButtonStyles {
  mode: "contained" | "outlined";
  bold?: boolean;
  dark?: boolean;
  disabled?: boolean;
  color?: string;
  fullRadius?: boolean;
}

