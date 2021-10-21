import React, { useRef } from "react";
import { View, TextInput } from "react-native";

import { material } from "react-native-typography";
import { Observer } from "mobx-react-lite";
import { Tap } from "../Tap";
import { Timer, TimerState } from "../Timer";
import { Caption, Paragraph } from "../Typography";

import { InputState } from "./state";

import { styles, selectionColor, INPUT_HEIGHT } from "./styles";

import { IInputProps, tOnContentSize } from "./types";

export function Input(props: IInputProps) {
  const {
    multiline,
    title,
    style,
    mode,
    timer,
    validation,
    value,
    numberOfLines,
  } = props;
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
    if (numberOfLines) {
      return;
    }
    const { height } = event.nativeEvent.contentSize;
    if (height > INPUT_HEIGHT) {
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
      {function renderInput() {
        return (
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Paragraph
                style={[
                  styles.title,
                  state.focused ? styles.focusedTitle : undefined,
                ]}
              >
                {title}
              </Paragraph>
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
                    [
                      styles.input,
                      multiline && numberOfLines
                        ? { height: INPUT_HEIGHT + numberOfLines * 14 }
                        : undefined,
                    ],
                    material.subheading,
                    styles.inputFont,
                    mode === "flat" ? styles.flat : undefined,
                    multiline && !numberOfLines
                      ? { height: state.height }
                      : undefined,
                    state.focused
                      ? styles.activeBorderColor
                      : styles.disabledBorderColor,
                    value ? styles.activeBorderColor : undefined,
                    style,
                  ]}
                  onBlur={onBlur}
                  textAlign={"right"}
                  textAlignVertical={multiline ? "top" : "center"}
                  underlineColorAndroid={"transparent"}
                  selectionColor={selectionColor}
                  onContentSizeChange={multiline ? onContentSize : undefined}
                />
              </View>
            </Tap>
            <View style={styles.errorContainer}>{renderErrors()}</View>
          </View>
        );
      }}
    </Observer>
  );
}
