import { ReactChild, ReactChildren } from "react";
import { TapGestureHandlerProps } from "react-native-gesture-handler";

export interface ITapProps extends TapGestureHandlerProps{
  children: ReactChild | ReactChildren;
  onPress?: () => void;
}
