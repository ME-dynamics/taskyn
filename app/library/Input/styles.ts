import { StyleSheet } from "react-native";
import { THEME } from "../theme";

export const INPUT_HEIGHT = 52;

export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.BIG,
    minHeight: INPUT_HEIGHT + 28,
    // alignItems: "flex-end",
    justifyContent: "space-between",
  },
  textContainer: {
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  focusedTitle: {
    color: THEME.COLORS.PRIMARY.NORMAL,
  },
  errorContainer: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    width: "100%",
  },
  error: {
    color: THEME.COLORS.ERROR,
    marginLeft: 8,
  },
  input: {
    width: THEME.WIDTH.BIG,
    height: INPUT_HEIGHT,
    borderWidth: 1,
    borderRadius: 8,
  },
  inputFont: {
    fontFamily: THEME.FONTS.REGULAR,
  },
  flat: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
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
});

export const selectionColor = THEME.COLORS.TRANSPARENT.INPUT_SELECTION;
