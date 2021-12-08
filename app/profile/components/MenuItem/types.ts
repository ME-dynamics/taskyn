import { ReactElement } from "react";
import { ViewStyle } from "react-native";
import { StyleProp } from "react-native";

interface IIconProps {
  color: string;
  size: number;
}
export interface IMenuItemProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  Icon: (props: IIconProps) => ReactElement;
  onPress?: () => any;
  line: boolean;
}
