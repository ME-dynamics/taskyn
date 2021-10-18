import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { ILineProps } from "../../types";
export function Line(prop: ILineProps) {
  const { direction } = prop;

  return (
    <View
      style={
        direction === "vertical" ? styles.lineVertical : styles.lineHorizontal
      }
    />
  );
}
