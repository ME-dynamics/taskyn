import {
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
  TextInputProps,
} from "react-native";

export interface IInputProps extends Omit<TextInputProps, "ref" | "onBlur"> {
  title: string;
  mode: "outlined" | "flat";
  validation?: string[];
  timer?: {
    minute: number;
    second: number;
  };
}

export type tOnContentSize =
  NativeSyntheticEvent<TextInputContentSizeChangeEventData>;
