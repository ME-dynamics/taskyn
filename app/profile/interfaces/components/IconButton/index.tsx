import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";

import { iconStyle } from "./styles";

import { IIconButtonProps } from "./types";

export function IconButton(props: IIconButtonProps) {
  const { Icon, onPress } = props;
  const { color, size, rippleColor } = iconStyle;
  return (
    <BorderlessButton onPress={onPress} rippleColor={rippleColor}>
      <Icon color={color} size={size} />
    </BorderlessButton>
  );
}
