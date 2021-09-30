import React, { useRef } from "react";
import { View, TextInput } from "react-native";

import { material } from "react-native-typography";
import { Observer } from "mobx-react-lite";
import { Tap } from "../Tap";
import { Timer, TimerState } from "../Timer";
import { Caption, Paragraph } from "../Typography";

import { InputState } from "./state";

import { styles } from "./styles";
import { colors } from "../theme";

import { IInputProps, tOnContentSize } from "./types";

export function Input(props: IInputProps) {
  const { multiline, title, style, mode, timer, validation, value } = props;
  const inputRef = useRef<TextInput>(null);
  const state = new InputState();
  function onPress() {
    if (inputRef) {
      state.focus();
      inputRef.current?.focus();
    }
  }
  function onBlur() {
    state.blur();
  }
  function onContentSize(event: tOnContentSize) {
    const { height } = event.nativeEvent.contentSize;
    if (height > 42) {
      state.setHeight(height);
    }
  }
  function renderErrors() {
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
  }
  const timerState = timer ? new TimerState(timer) : null;
  function renderTimer() {
    if (!timer) {
      return null;
    }
    if (!timerState) {
      return null;
    }
    return <Timer style={styles.timerColor} state={timerState} />;
  }
  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Paragraph style={styles.paragraph}>{title}</Paragraph>
            {renderTimer()}
          </View>
          <Tap onPress={onPress}>
            <View
              pointerEvents={
                state.focused ? "box-none" : value ? "box-none" : "box-only"
              }
            >
              <TextInput
                {...props}
                ref={inputRef}
                style={[
                  styles.input,
                  state.focused
                    ? styles.activeBorderColor
                    : styles.disabledBorderColor,
                  value ? styles.activeBorderColor : null,
                  material.body1,
                  styles.inputFont,
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
            </View>
          </Tap>
          <View style={styles.errorContainer}>{renderErrors()}</View>
        </View>
      )}
    </Observer>
  );
}
