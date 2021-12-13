import { StyleSheet } from "react-native";
import { material } from "react-native-typography";
import memoize from "fast-memoize";
import { THEME } from "../theme";
import { IInputStyleGen, tInputMode } from "./types";

function containerHeightGen(mode: tInputMode) {
  if (mode === "with-label") {
    // 28 for title
    // 56 for input
    // 34 for errors
    return 28 + 56 + 34;
  }
  if (mode === "outlined") {
    // 56 for input
    // 34 for errors
    return 56 + 34;
  }
  if (mode === "flat") {
    return 58 + 34;
  }
  return 56 + 34;
}
function inputHeightGen(mode: tInputMode) {
  if (mode === "outlined") {
    // 54 for input
    // 34 for title
    return 56;
  }
  if (mode === "flat") {
    return 58;
  }
  return 56;
}
function inputBorderGen(mode: tInputMode) {
  if (mode === "flat") {
    return {
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 1,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    };
  }
  return {
    borderWidth: 1,
    borderRadius: 8,
  };
}

function styleGenerator(args: IInputStyleGen) {
  const {
    mode,
    focused,
    inputHeightState,
    multiline,
    numberOfLines,
    hasError,
    clearButton,
    limit,
    value,
    style,
  } = args;
  const inputHeight = inputHeightGen(mode);
  const height = containerHeightGen(mode);
  const isFlat = mode === "flat";
  const flatBackgroundColor = isFlat ? "rgba(0,0,0,0.12)" : undefined;
  const styles = StyleSheet.create({
    container: {
      width: THEME.WIDTH.WIDE,
      height,
    },
    titleContainer: {
      width: "100%",
      height: 28,
      flexDirection: "row-reverse",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    focusedTitle: {
      color: THEME.COLORS.PRIMARY.NORMAL,
    },
    inputContainer: {
      flexDirection: "row",
      width: THEME.WIDTH.WIDE,
      height: inputHeight,
      backgroundColor: flatBackgroundColor,
      paddingRight: 16,
      paddingBottom: isFlat ? 0 : undefined,
      ...inputBorderGen(mode),
    },
    input: {
      flex: 9,
    },
    inputFont: {
      fontFamily: THEME.FONTS.REGULAR,
    },
    activeBorderColor: {
      borderColor: THEME.COLORS.PRIMARY.NORMAL,
    },
    disabledBorderColor: {
      borderColor: THEME.COLORS.GREY.LIGHT,
    },
    limit: { position: "absolute", top: -18, left: 0 },
    limitActive: {
      color: THEME.COLORS.PRIMARY.NORMAL,
    },
    limitReached: {
      color: THEME.COLORS.ERROR,
    },
    clearButtonContainer: {
      flex: 1,
      zIndex: 1,
      alignItems: "flex-end",
      justifyContent: "center",
    },
    errorContainer: {
      width: "100%",
      height: 34,
      flexDirection: "row-reverse",
      paddingLeft: 16,
      paddingTop: 8,
      overflow: "hidden",
    },
    error: {
      width: "100%",
      color: THEME.COLORS.ERROR,
      marginLeft: 8,
    },
    inputError: {
      borderColor: THEME.COLORS.ERROR,
    },
    animatedText: {
      position: "absolute",
      zIndex: 1,
      paddingHorizontal: 4,
      ...material.subheadingObject,
      backgroundColor: isFlat ? undefined : THEME.COLORS.BACKGROUND,
      top: inputHeight / 2 - 10,
      right: 16,
      fontFamily: THEME.FONTS.REGULAR,
      textAlign: "right",
      overflow: "hidden",
    },
    animatedTextActive: {
      color: THEME.COLORS.PRIMARY.NORMAL,
    },
    animatedTextError: {
      color: THEME.COLORS.ERROR,
    },
  });

  // theses styles are based on states
  // they change on state changes and should be passed like this
  const inputContainerStyles = [
    styles.inputContainer,
    focused ? styles.activeBorderColor : styles.disabledBorderColor,
    value ? styles.activeBorderColor : undefined,
    hasError ? styles.inputError : undefined,
  ];
  const inputStyles = [
    material.subheading,
    styles.input,

    multiline && numberOfLines
      ? { height: inputHeight + numberOfLines * 14 }
      : undefined,
    multiline && !numberOfLines ? { height: inputHeightState } : undefined,
    styles.inputFont,
    style,
  ];
  const limitStyle = [
    styles.limit,
    focused ? styles.limitActive : undefined,
    Number(value?.length) === Number(limit) ? styles.limitReached : undefined,
  ];
  const animatedTextStyle = [
    styles.animatedText,
    focused ? styles.animatedTextActive : undefined,
    hasError ? styles.animatedTextError : undefined,
  ];
  const selectionColor = THEME.COLORS.TRANSPARENT.INPUT_SELECTION;
  return {
    styles,
    inputContainerStyles,
    inputStyles,
    limitStyle,
    animatedTextStyle,
    selectionColor,
    INPUT_HEIGHT: inputHeight,
    clearIconSize: 24,
    clearIconColor: hasError ? THEME.COLORS.ERROR : undefined,
  };
}

export const styleGen = memoize(styleGenerator);
