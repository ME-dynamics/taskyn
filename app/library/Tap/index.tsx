import React from "react";
import { View } from "react-native";
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { ITapProps } from "./types";

export function Tap(props: ITapProps) {
  const { children, onPress, waitFor } = props;
  function onTapPress(event: TapGestureHandlerGestureEvent) {
    const { state } = event.nativeEvent;
    if (onPress && state === 4) {
      onPress();
    }
  }
  return (
    <TapGestureHandler onHandlerStateChange={onTapPress} waitFor={waitFor}>
      {
        // there must be a view around children to avoid ref bug
        // that causes crash
      }
      <View>{children}</View>
    </TapGestureHandler>
  );
}
