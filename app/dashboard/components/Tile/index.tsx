import { Octicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Subheading, Touchable } from "../../../library";
import { styles, iconStyle } from "./styles";
import { ITileProps } from "../../types";
export function Tile(props: ITileProps) {
  const { Icon,onPress, title } = props;
  const { color, size } = iconStyle;
  return (
    <View style={styles.container}>
      <Icon size={size} color={color} />
      <Subheading>{title}</Subheading>
      <Touchable onPress={onPress} rippleColor={"lightGrey"} />
    </View>
  );
}
