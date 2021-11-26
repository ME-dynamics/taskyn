import { StyleSheet } from "react-native";
import { material } from "react-native-typography";
import memoize from "fast-memoize";
import { THEME } from "../theme";
import { IInputStyleGen, tInputMode } from "./types";



function containerHeightGen(mode: tInputMode) {
  if (mode === "outlined") {
    // 54 for input
    // 34 for title
    // 34 for errors
    return 54 + 34 + 34;
  }
  if (mode === "outline-material") {
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
    return 54;
  }
  if (mode === "outline-material") {
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
function clearButtonTop(mode: tInputMode) {
  if (mode === "outlined") {
    // 34 title container height
    // 54 outlined input height
    // 12 half of clear button size
    return 34 + 54 / 2 - 12;
  }
  // 56 other inputs height
  // 12 half of clear button size
  return 56 / 2 - 12;
}
function styleGenerator(args: IInputStyleGen) {
  const {
    mode,
    focused,
    inputHeightState,
    multiline,
    numberOfLines,
    value,
    style,
  } = args;
  const inputHeight = inputHeightGen(mode);
  const height = containerHeightGen(mode);
  const isFlat = mode === "flat";
  const flatBackgroundColor = isFlat ? "rgba(0,0,0,0.12)" : undefined;
  const styles = StyleSheet.create({
    container: {
      width: THEME.WIDTH.BIG,
      height,
    },
    titleContainer: {
      width: "100%",
      height: 34,
      flexDirection: "row-reverse",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    focusedTitle: {
      color: THEME.COLORS.PRIMARY.NORMAL,
    },
    input: {
      width: THEME.WIDTH.BIG,
      height: inputHeight,
      backgroundColor: flatBackgroundColor,
      paddingRight: 16,
      paddingBottom: isFlat ? 0 : undefined,
      ...inputBorderGen(mode),
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
    timerColor: {
      color: THEME.COLORS.PRIMARY.NORMAL,
    },
    clearButtonContainer: {
      zIndex: 1,
      position: "absolute",
      left: 12,
      top: clearButtonTop(mode),
    },
    errorContainer: {
      width: "100%",
      height: 34,
      flexDirection: "row-reverse",
      flexWrap: "wrap",
    },
    error: {
      color: THEME.COLORS.ERROR,
      marginLeft: 8,
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
  });
  // theses styles are based on states 
  // they change on state changes and should be passed like this
  const inputStyles = [
    material.subheading,
    styles.input,
    focused ? styles.activeBorderColor : styles.disabledBorderColor,
    value ? styles.activeBorderColor : undefined,
    multiline && numberOfLines
      ? { height: inputHeight + numberOfLines * 14 }
      : undefined,
    multiline && !numberOfLines ? { height: inputHeightState } : undefined,
    styles.inputFont,
    style,
  ];
  const selectionColor = THEME.COLORS.TRANSPARENT.INPUT_SELECTION;
  return {
    styles,
    inputStyles,
    selectionColor,
    INPUT_HEIGHT: inputHeight,
    clearIconSize: 24, 
    animatedColors: {
      black: material.subheadingObject.color?.toString() || "black",
      primary: THEME.COLORS.PRIMARY.NORMAL,
    },
  };
}

export const styleGen = memoize(styleGenerator);
