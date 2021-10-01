import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../theme";

export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.BIG,
    minHeight: 42 + 26,
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  textContainer: {
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingBottom: 4,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: "bold",
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
    height: 42,
    borderWidth: 1,
    borderRadius: 8,
  },
  inputFont: {
    fontFamily: THEME.FONTS.REGULAR
  },
  flat: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderRadius: 0,
  },
  activeBorderColor: {
    borderColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  disabledBorderColor: {
    borderColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  timerColor: {
    color: THEME.COLORS.PRIMARY.NORMAL
  }
});


export const selectionColor = THEME.COLORS.TRANSPARENT.PRIMARY