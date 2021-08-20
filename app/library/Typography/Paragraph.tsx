import React from "react";
import { Text } from "react-native";
import { material } from "react-native-typography";

import { ITextProps } from "./types";

export function Paragraph(props: ITextProps) {
  const { children } = props;
  return (
    <Text {...props} style={material.body1}>
      {children}
    </Text>
  );
}
