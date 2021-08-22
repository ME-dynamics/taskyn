import { TextProps } from "react-native";

export interface ITimerProps extends TextProps {
  minute: number;
  second: number;
}

export interface ITime {
  minute: number;
  second: number;
}
