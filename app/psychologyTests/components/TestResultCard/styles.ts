import { StyleSheet } from "react-native";
import { THEME } from "../../../library";
export const errorColor = THEME.COLORS.TEST.RED.DARK;
export const warningColor = THEME.COLORS.TEST.YELLOW.DARK;
export const factorColor = "#0CECDD";
export const facetColor = THEME.COLORS.GREY.DARK;
export const styles = StyleSheet.create({
  container: {
    minHeight: 160,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  card: {
    width: "90%",
    minHeight: 160,
    marginVertical: 16,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    elevation: 2,
    borderRadius: 12,
    overflow: "hidden",
  },
  textContainer: {
    flex: 1,
    paddingRight: 16,
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  row: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  sideBarColor: {
    width: 8,
    elevation: 1,
    height: "65%",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: "red",
  },
});
