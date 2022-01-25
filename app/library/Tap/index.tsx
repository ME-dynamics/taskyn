import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import {
  State,
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { useDoublePress } from "../doublePress";
import { ITapProps } from "./types";

function TapComponent(props: ITapProps) {
  const { children, onPress, waitFor } = props;
  const { onTouchablePress } = useDoublePress(onTapPress);
  function onTapPress(event: TapGestureHandlerGestureEvent) {
    // WHY: after adding useDoublePress, state does not activate
    if (onPress) {
      onPress();
    }
  }
  return (
    <TapGestureHandler
      onHandlerStateChange={onTouchablePress}
      waitFor={waitFor}
    >
      {
        // there must be a view around children to avoid ref bug
        // that causes crash
      }
      <View>{children}</View>
    </TapGestureHandler>
  );
}

export const Tap = observer(TapComponent);
