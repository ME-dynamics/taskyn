import React, { useRef, useState } from "react";
import { View, TextInput } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { observer } from "mobx-react-lite";
import { Tap } from "../Tap";
import { Timer } from "../Timer";
import { Caption, Subheading } from "../Typography";
import { IconButton } from "../IconButton";
import { styleGen } from "./styles";
import { IInputProps, tOnContentSize, tNativeEvent } from "./types";



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
    onChangeText,
    onBlur,
    placeholder,
    clearButton,
  } = props;
  const inputRef = useRef<TextInput>(null);
  /**
   * clearRef is used for gesture handler components, Tap uses this ref 
   * to wait for IconButton to react to touch, if IconButton does not recognize anything
   * then Tap executes onPress event, more information available in 
   * react native gesture handler documents
   * https://docs.swmansion.com/react-native-gesture-handler/docs/interactions#awaiting-other-handlers
   */
  const clearRef = useRef(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [inputHeight, setHeight] = useState<number>(56);

  const {
    styles,
    inputStyles,
    selectionColor,
    clearIconSize,
    INPUT_HEIGHT,
    animatedColors,
  } = styleGen({
    mode,
    focused,
    inputHeightState: inputHeight,
    multiline,
    numberOfLines,
    value,
    style,
  });

  
  let animation: Animated.SharedValue<number> | undefined;
  // define animated shared value when needed
  if (mode === "outline-material" || mode === "flat") {
    // if value is defined and not empty
    // animation should be at active stage
    animation = useSharedValue(value ? 1 : 0);
  }
  function onPress() {
    if (inputRef) {
      setFocused(true);
      inputRef.current?.focus();
    }
    // start animation on focus
    if (animation) {
      animation.value = 1;
    }
  }
  function onBlurPress(event: tNativeEvent) {
    setFocused(false);
    /**
     * if text input is empty and animation is defined 
     * onBlur animation should reset to default value
     */
    if (!value && animation) {
      animation.value = 0;
    }
    if (onBlur) {
      onBlur(event);
    }
  }
  function onClear() {
    if (onChangeText) {
      onChangeText("");
    }
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
  function renderTitle() {
    if (mode === "outlined") {
      return (
        <View style={styles.titleContainer}>
          <Subheading style={focused ? styles.focusedTitle : undefined}>
            {title}
          </Subheading>
          {renderTimer()}
        </View>
      );
    }
    if (
      (mode === "outline-material" || mode === "flat") &&
      animation !== undefined
    ) {
      const isFlat = mode === "flat";
      // translateX for flat and outline-material mode
      // I found the numbers with simple calculation and testing
      const reduceX = isFlat ? -10 : 2;
      const center = INPUT_HEIGHT / 2 + reduceX;
      const animatedStyle = useAnimatedStyle(() => {
        return {
          transform: [
            {
              translateX: withTiming(animation?.value === 1 ? 12 : 0),
            },
            { translateY: withTiming(animation?.value === 1 ? -center : 0) },
            { scale: withTiming(animation?.value === 1 ? 0.8 : 1) },
          ],
          color:
            animation?.value === 1
              ? animatedColors.primary
              : animatedColors.black,
        };
      });
      return (
        <Animated.Text
          style={[styles.animatedText, animatedStyle]}
          onPress={onPress}
        >
          {title}
        </Animated.Text>
      );
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
  function renderClearButton() {
    if (value && clearButton) {
      return (
        <View style={styles.clearButtonContainer}>
          <IconButton
            ref={clearRef}
            size={clearIconSize}
            Icon={({ size, color }) => {
              return (
                <MaterialCommunityIcons
                  name="close-circle-outline"
                  size={size}
                  color={color}
                />
              );
            }}
            onPress={onClear}
          />
        </View>
      );
    }
  }
  return (
    <View style={styles.container}>
      {renderTitle()}
      <Tap onPress={onPress} waitFor={clearRef}>
        <View
          pointerEvents={focused ? "box-none" : value ? "box-none" : "box-only"}
        >
          <TextInput
            {...props}
            placeholder={
              mode !== "outlined" && focused ? placeholder : undefined
            }
            ref={inputRef}
            style={inputStyles}
            onBlur={onBlurPress}
            textAlignVertical={multiline ? "top" : "center"}
            underlineColorAndroid={"transparent"}
            selectionColor={selectionColor}
            onContentSizeChange={multiline ? onContentSize : undefined}
          />
        </View>
      </Tap>
      {renderClearButton()}
      <View style={styles.errorContainer}>{renderErrors()}</View>
    </View>
  );
}

export const Input = observer(InputComponent);
