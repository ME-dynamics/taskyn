import React, { useRef, useState } from "react";
import { View, TextInput } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { observer } from "mobx-react-lite";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Tap } from "../Tap";
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
    errors,
    value,
    numberOfLines,
    onChangeText,
    onBlur,
    placeholder,
    clearButton,
    limit,
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
    inputContainerStyles,
    inputStyles,
    limitStyle,
    animatedTextStyle,
    selectionColor,
    clearIconSize,
    clearIconColor,
    INPUT_HEIGHT,
  } = styleGen({
    mode,
    focused,
    inputHeightState: inputHeight,
    multiline,
    numberOfLines,
    hasError: !!errors?.length,
    clearButton,
    limit,
    value,
    style,
  });

  let animation: Animated.SharedValue<number> | undefined = undefined;
  // define animated shared value when needed
  if (mode !== "with-label") {
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
     * if text input is empty
     * onBlur animation should reset to default value
     */
    if (!value && animation) {
      animation.value = 0;
    }
    if (onBlur) {
      onBlur(event);
    }
  }
  function onChangeValue(text: string) {
    if (limit && text.length > limit) {
      return;
    }
    if (onChangeText) {
      onChangeText(text);
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
    if (mode === "with-label") {
      return (
        <View style={styles.titleContainer}>
          <Subheading style={focused ? styles.focusedTitle : undefined}>
            {title}
          </Subheading>
        </View>
      );
    }
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
      };
    });
    return (
      <Animated.Text
        style={[animatedStyle, animatedTextStyle]}
        onPress={onPress}
      >
        {title}
      </Animated.Text>
    );
  }
  function renderErrors() {
    if (!errors) {
      return null;
    }
    let errorText = "";
    for (let index = 0; index < errors.length; index++) {
      const text = errors[index];
      errorText += `*${text}    `;
    }
    return (
      <Caption numberOfLines={1} style={styles.error}>
        {errorText}
      </Caption>
    );
  }

  function renderLimit() {
    if (!limit) {
      return null;
    }

    return (
      <Caption style={limitStyle}>{`${digitsEnToFa(limit)}/${
        value ? digitsEnToFa(value.length) : digitsEnToFa(0)
      }`}</Caption>
    );
  }
  function renderClearButton() {
    if (value && clearButton) {
      return (
        <View style={styles.clearButtonContainer}>
          <IconButton
            ref={clearRef}
            size={clearIconSize}
            color={clearIconColor}
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
      {renderLimit()}
      {renderTitle()}
      <Tap onPress={onPress} waitFor={clearRef}>
        <View
          pointerEvents={focused ? "box-none" : value ? "box-none" : "box-only"}
          style={inputContainerStyles}
        >
          {renderClearButton()}
          <TextInput
            {...props}
            placeholder={
              mode === "with-label"
                ? placeholder
                : focused
                ? placeholder
                : undefined
            }
            ref={inputRef}
            style={inputStyles}
            onBlur={onBlurPress}
            onChangeText={onChangeValue}
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
