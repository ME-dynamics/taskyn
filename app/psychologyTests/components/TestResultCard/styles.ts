import { StyleSheet } from "react-native";
import { THEME } from "../../../library";
export const errorColor = THEME.COLORS.TEST.RED.DARK;
export const warningColor = THEME.COLORS.TEST.YELLOW.DARK;
export const factorColor = THEME.COLORS.BLACK.NORMAL;
export const facetColor = THEME.COLORS.GREY.DARK;
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
  textContainer: {
    flex: 20,
    flexDirection: "column",
    paddingRight: 10,
    justifyContent: "space-evenly",
  },
  row: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  sideBarColor: {
    flex: 0.3,
    backgroundColor: "red",
  },
});
