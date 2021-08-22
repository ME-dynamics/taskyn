import { NativeSyntheticEvent, TextInputContentSizeChangeEventData, TextInputProps } from "react-native";



export interface IInputProps extends Omit<TextInputProps, "ref" | "onBlur"> {
    title: string
    mode: "outlined" | "flat";
    validate?: (text: string) => string;
}


export type tOnContentSize = NativeSyntheticEvent<TextInputContentSizeChangeEventData>