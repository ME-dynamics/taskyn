import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import memoize from "fast-memoize";
import { colors } from "../theme";
import { tMode, IButtonStyles } from "./types";

export const activityStyles = StyleSheet.create({
  container: {
    transform: [{ scale: 0.8 }],
  },
});

export function activityStyleGen(mode: tMode) {
  const activityColor = mode === "contained" ? "white" : colors.primaryPurple;
  return { activityColor, styles: activityStyles };
}

export const styleGen = memoize((args: IButtonStyles) => {
  const { mode, size, dark, disabled, color, fullRadius } = args;
  const getHeight = (): number => {
    switch (size) {
      case "small":
        return 36;
      case "medium":
        return 38;
      case "big":
        return 42;
      default:
        return 36;
    }
  };
  const getMinWidth = (): number | string => {
    switch (size) {
      case "small":
        return widthPercentageToDP("16%");
      case "medium":
        return widthPercentageToDP("48%");
      case "big":
        return "86%";
      default:
        return widthPercentageToDP("16%");
    }
  };
  const getChosenColor = () => {
    if (dark === undefined) {
      if (mode === "contained") {
        return "white";
      } else {
        return color ? color : colors.primaryPurple;
      }
    } else if (dark === false && mode === "contained") {
      return color ? color : "rgba(0,0,0,0.87)";
    } else {
      return color ? color : colors.primaryPurple;
    }
  };

  const styles = StyleSheet.create({
    container: {
      minWidth: getMinWidth(),
      maxWidth: size === "big" ? "86%" : widthPercentageToDP("52%"),
      height: getHeight(),
      borderWidth: mode === "outlined" ? StyleSheet.hairlineWidth : 0,
      backgroundColor:
        mode === "contained" ? colors.primaryPurple : "transparent",
      borderColor: disabled
        ? colors.grey
        : color
        ? color
        : colors.primaryPurple,
      borderRadius: fullRadius ? getHeight() / 2 : 4,
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 4,
      overflow: "hidden",
      elevation: mode === "contained" ? 2 : 0,
    },
    text: {
      fontSize: size === "big" ? 14 : 12,
      color: getChosenColor(),
      marginHorizontal: 4,
    },
    icon: {
      marginHorizontal: 4,
    },
  });
  return { styles };
});
