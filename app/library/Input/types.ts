import { TextInputProps } from "react-native";



export interface IInputProps extends Omit<TextInputProps, "ref" | "onBlur"> {
    title: string
    mode: "outlined" | "flat" 
}