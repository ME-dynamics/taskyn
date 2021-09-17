import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react-lite";
import { material } from "react-native-typography";

import { styles } from "./styles";
import { ITextProps } from "./types";

function SubheadingComponent(props: ITextProps) {
  const { children, style } = props;
  return (
    <Text {...props} style={[material.subheading, styles.Subheading, style]}>
      {children}
    </Text>
  );
}

export const Subheading = observer(SubheadingComponent);
