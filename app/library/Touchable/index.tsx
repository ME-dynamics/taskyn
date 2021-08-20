import React from "react";
import { StyleSheet } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import { colors } from "../theme";

interface ITouchableProps extends RectButtonProperties {
  rippleColor: "lightGrey" | "grey" | "darkGrey";
}

export default (props: ITouchableProps) => {
  let color: string;
  switch (props.rippleColor) {
    case "lightGrey":
      color = colors.lightGrey;
      break;
    case "grey":
      color = colors.grey;
      break;
    case "darkGrey":
      color = colors.darkGrey;
      break;
    default:
      throw new Error("color must be of valid types");
  }
  return (
    <RectButton
      {...props}
      rippleColor={color}
      style={StyleSheet.absoluteFill}
    />
  );
};
