import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { useDoublePress } from "../doublePress";
import { ITapProps } from "./types";

export function Tap(props: ITapProps) {
  const { children, onPress, waitFor } = props;
  const { onTouchablePress } = useDoublePress(onPress);
  return (
    <TouchableWithoutFeedback onPress={onTouchablePress}>
      {
        // there must be a view around children to avoid ref bug
        // that causes crash
      }
      <View>{children}</View>
    </TouchableWithoutFeedback>
  );
}
