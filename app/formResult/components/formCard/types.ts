import { ReactElement } from "react";
import { ViewStyle } from "react-native";
import { StyleProp } from "react-native";
interface IIconProps {
  color: string;
  size: number;
}
export interface IPatients {
  id?: string;
  Icon: (props: IIconProps) => ReactElement;
  title: string;
  answer: string;
  onPress?: () => any;
  date: string;
}
