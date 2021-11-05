import memoize from "fast-memoize";
import { StyleSheet } from "react-native";
import { THEME } from "../../../library";
import { IButtonStyles } from "./type";

function buttonStyle(args: IButtonStyles) {
  const { mode, disabled, color } = args;

  const styles = StyleSheet.create({
    container: {
      width: 60,
      height: 60,
      borderWidth: mode === "outlined" ? StyleSheet.hairlineWidth : 0,
      backgroundColor: mode === "contained" ? color : "transparent",
      borderColor: disabled
        ? THEME.COLORS.GREY.NORMAL
        : color
        ? color
        : THEME.COLORS.PRIMARY.NORMAL,
      borderRadius: 6,
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 4,
      overflow: "hidden",
      elevation: mode === "contained" ? 2 : 0,
    },
    text: {
      fontSize: 16,
      fontFamily: "Vazir-Bold-UI",
      color: mode === "contained" ? "white" : THEME.COLORS.PRIMARY.NORMAL,
      marginHorizontal: 4,
    },
  });

  return { styles };
}
export const styleGen = memoize(buttonStyle);
