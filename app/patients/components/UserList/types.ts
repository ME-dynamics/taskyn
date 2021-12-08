import { ReactElement } from "react";
import { ViewStyle } from "react-native";
import { StyleProp } from "react-native";
interface IIconProps {
  color: string;
  size: number;
}
export interface IPatients {
  id?: string;
  name: string;
  onPress?: () => any;
  mode: "request" | "reject" | "accept";
}
