import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react-lite";
import { material } from "react-native-typography";

import { ITextProps } from "./types";
export const Caption = observer((props: ITextProps) => {
  const { children, style } = props;
  return (
    <Text {...props} style={[material.caption, style]}>
      {children}
    </Text>
  );
});
