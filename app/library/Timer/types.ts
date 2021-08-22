import { TextProps } from "react-native";
import { TimerState } from "./state";

export interface ITimerProps extends TextProps {
  state: TimerState;
}

export interface ITime {
  minute: number;
  second: number;
}
