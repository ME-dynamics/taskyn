import { TextProps } from "react-native";

export interface ITimerProps extends TextProps {
  minute: number;
  second: number;
}

export interface ITimeState {
  minute: number;
  second: number;
}