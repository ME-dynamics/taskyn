import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react-lite";
import { material } from "react-native-typography";
import { ITextProps } from "./types";

function HeadlineComponent(props: ITextProps)  {
  const { children, style } = props;
  return (
    <Text {...props} style={[material.headline, style]}>
      {children}
    </Text>
  );
}


export const Headline = observer(HeadlineComponent);
