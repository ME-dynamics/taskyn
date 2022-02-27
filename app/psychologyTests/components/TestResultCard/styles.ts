import { StyleSheet } from "react-native";
import { THEME } from "../../../library";
export const errorColor = THEME.COLORS.TEST.RED.DARK;
export const warningColor = THEME.COLORS.TEST.YELLOW.DARK;
export const factorColor = THEME.COLORS.TEST.GREEN.DARK;
export const facetColor = THEME.COLORS.TEST.GREEN.NORMAL;
export const styles = StyleSheet.create({
  container: {
    width: "95%",
    minHeight: 160,
    marginVertical: 10,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    elevation: 2,
    borderRadius: 4,
    overflow: "hidden",
  },
  TextContainer: {
    flex: 20,
    flexDirection: "column",
    paddingRight: 10,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  sideBarColorr: {
    flex: 0.5,
    // marginRight: 10,
    backgroundColor: "red",
  },
});
