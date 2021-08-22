import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react-lite";
import { material } from "react-native-typography";

import { ITextProps } from "./types";

export const Paragraph = observer((props: ITextProps) => {
  const { children, style } = props;
  return (
    <Text {...props} style={[material.body1, style ]}>
      {children}
    </Text>
  );
})
