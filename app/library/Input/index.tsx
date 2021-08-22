import React, { useRef } from "react";
import { View, TextInput, LayoutChangeEvent } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import { material } from "react-native-typography";
import { Observer } from "mobx-react-lite";
import { Timer } from "../Timer";
import { Caption, Paragraph } from "../Typography";

import { InputState } from "./state";

import { styles } from "./styles";
import { colors } from "../theme";

import { IInputProps, tOnContentSize } from "./types";

export const Input = (props: IInputProps) => {
  const { multiline, title, style, mode, timer, validation } = props;
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
  const onContentSize = (event: tOnContentSize) => {
    const { height } = event.nativeEvent.contentSize;
    if (height > 42) {
      state.setHeight(height);
    }
  };
  const renderErrors = () => {
    if (!validation) {
      return null;
    }
    const errors = [];
    for (let index = 0; index < validation.length; index++) {
      const text = validation[index];
      errors.push(
        <Caption key={text} style={styles.error}>{`* ${text}`}</Caption>
      );
    }
    return errors;
  };
  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Paragraph style={styles.paragraph}>{title}</Paragraph>
            {timer ? (
              <Timer
                style={styles.paragraph}
                minute={timer.minute}
                second={timer.second}
              />
            ) : null}
          </View>
          <TapGestureHandler onHandlerStateChange={onPress}>
            <TextInput
              pointerEvents={state.focused ? "box-none" : "box-only"}
              {...props}
              ref={inputRef}
              style={[
                styles.input,
                state.focused
                  ? styles.activeBorderColor
                  : styles.disabledBorderColor,
                material.body1,
                mode === "flat" ? styles.flat : null,
                multiline ? { height: state.height } : null,
                style,
              ]}
              onBlur={onBlur}
              textAlign={"right"}
              textAlignVertical={multiline ? "top" : "center"}
              underlineColorAndroid={"transparent"}
              selectionColor={colors.primaryPurple}
              onContentSizeChange={multiline ? onContentSize : undefined}
            />
          </TapGestureHandler>
          <View style={styles.errorContainer}>{renderErrors()}</View>
        </View>
      )}
    </Observer>
  );
};
