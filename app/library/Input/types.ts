import {
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
  TextInputProps,
} from "react-native";

import { ITime } from "../Timer/types";
export interface IInputProps extends Omit<TextInputProps, "ref" | "onBlur"> {
  title: string;
  mode: "outlined" | "flat";
  validation?: string[];
  timer?: ITime;
}

export type tOnContentSize =
  NativeSyntheticEvent<TextInputContentSizeChangeEventData>;
