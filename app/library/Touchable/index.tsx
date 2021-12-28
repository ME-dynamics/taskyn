import React, { Ref } from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { observer } from "mobx-react-lite";
import { THEME } from "../theme";

import { ITouchableProps } from "./types";

function TouchableComponent(props: ITouchableProps, ref: Ref<RectButton>) {
  const { rippleColor, onPress } = props;
  let color: string;
  switch (rippleColor) {
    case "lightGrey":
      color = THEME.COLORS.GREY.LIGHT;
      break;
    case "grey":
      color = THEME.COLORS.GREY.NORMAL;
      break;
    case "darkGrey":
      color = THEME.COLORS.GREY.DARK;
      break;
    default:
      throw new Error("color must be of valid types");
  }
  return (
    <RectButton
      ref={ref}
      onPress={onPress}
      rippleColor={color}
      style={StyleSheet.absoluteFill}
    />
  );
}

export const Touchable = observer(TouchableComponent, { forwardRef: true });
