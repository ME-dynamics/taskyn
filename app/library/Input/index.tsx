import React, { useRef, useState } from "react";
import { View, TextInput } from "react-native";

import { material } from "react-native-typography";
import { observer } from "mobx-react-lite";
import { Tap } from "../Tap";
import { Timer } from "../Timer";
import { Caption, Subheading } from "../Typography";

import { styles, selectionColor, INPUT_HEIGHT } from "./styles";

import { IInputProps, tOnContentSize } from "./types";
function InputComponent(props: IInputProps) {
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
  // const state = useLocalObservable(() => new InputState());
  const [focused, setFocused] = useState<boolean>(false);
  const [inputHeight, setHeight] = useState<number>(52);
  function onPress() {
    if (inputRef) {
      setFocused(true);
      inputRef.current?.focus();
    }
  }
  function onBlur() {
    setFocused(false);
  }
  function onContentSize(event: tOnContentSize) {
    if (numberOfLines) {
      return;
    }
    const { height } = event.nativeEvent.contentSize;
    if (height > INPUT_HEIGHT) {
      setHeight(height);
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

  function renderTimer() {
    if (!timer) {
      return null;
    }
    const { minute, second } = timer;
    return <Timer style={styles.timerColor} minute={minute} second={second} />;
  }
  return (
    <View
      style={[
        styles.container,
        mode === "flat" ? styles.flatContainer : styles.outlineContainer,
      ]}
    >
      <View style={styles.textContainer}>
        <Subheading style={focused ? styles.focusedTitle : undefined}>
          {title}
        </Subheading>
        {renderTimer()}
      </View>
      <Tap onPress={onPress}>
        <View
          pointerEvents={focused ? "box-none" : value ? "box-none" : "box-only"}
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
              multiline && !numberOfLines ? { height: inputHeight } : undefined,
              focused ? styles.activeBorderColor : styles.disabledBorderColor,
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
}

export const Input = observer(InputComponent);
