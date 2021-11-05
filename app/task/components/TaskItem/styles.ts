import { StyleSheet } from "react-native";
import { THEME } from "../../../library";
import { material } from "react-native-typography";

export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.BIG,
    minHeight: 56,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    marginVertical: 6,
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  footer: {
    width: "100%",
    height: 36,
    flexDirection: "row-reverse",
  },
  dateContainer: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 8,
  },
  buttonContainer: {
    flex: 5,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 8,
  },
  buttonContainerEdit: { justifyContent: "space-evenly" },
  buttonContainerDone: { justifyContent: "flex-end", paddingRight: 4 },
  textInput: {
    ...material.body1Object,
    fontFamily: THEME.FONTS.REGULAR,
    padding: 0,
    margin: 0,
  },
});

export const selectionColor = THEME.COLORS.PRIMARY.DARK;
