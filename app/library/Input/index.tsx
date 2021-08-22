import React, { useRef } from "react";
import { View, TextInput } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler"
import { material } from "react-native-typography";
import { Observer } from "mobx-react-lite";
import { Paragraph } from "../Typography";

import { InputState } from "./state";

import { styles } from "./styles";
import { colors } from "../theme";

import { IInputProps } from "./types";

export const Input = (props: IInputProps) => {
  const inputRef = useRef<TextInput>(null);
  const state = new InputState();
  const onPress = () => {
    if (inputRef) {
      state.focus();
      inputRef.current?.focus();
    }
  };
  const onBlur = () => {
    state.blur();
  };
  const { multiline, title, style, mode } = props;
  return (
    <Observer>
      {() => (
        <TapGestureHandler onHandlerStateChange={onPress} >
          <View
            style={styles.container}
            pointerEvents={state.focused ? "box-none" : "box-only"}
          >
            <Paragraph style={styles.paragraph}>{title}</Paragraph>
            <TextInput
              {...props}
              ref={inputRef}
              style={[
                styles.input,
                state.focused
                  ? styles.activeBorderColor
                  : styles.disabledBorderColor,
                material.body1,
                mode === "flat" ? styles.flat : null,
                style,
              ]}
              onBlur={onBlur}
              textAlign={"right"}
              textAlignVertical={multiline ? "top" : "center"}
              underlineColorAndroid={"transparent"}
              selectionColor={colors.primaryPurple}
            />
          </View>
        </TapGestureHandler>
      )}
    </Observer>
  );
};
