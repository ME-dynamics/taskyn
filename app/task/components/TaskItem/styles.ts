import { StyleSheet } from "react-native";
import { THEME } from "../../../library";
import { material } from "react-native-typography";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.WIDE,
    minHeight: 110,
    backgroundColor: "white",
    borderRadius: 6,
    elevation: 3,
    marginVertical: 12,
  },
  textContainer: {
    paddingTop: 10,
    minHeight: 50,
    paddingHorizontal: 16,
  },

  dateContainer: {
    height: 30,
    alignItems: "flex-end",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginLeft: 8,
    marginRight: 8,
  },
  buttonContainer: {
    height: 30,
    right: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttonContainerEdit: { justifyContent: "space-evenly" },
  buttonContainerDone: { justifyContent: "flex-end", paddingRight: 4 },
  textInput: {
    ...material.body1Object,
    fontFamily: THEME.FONTS.REGULAR,
    padding: 0,
    margin: 0,
    lineHeight: 24,
  },
  popUp: {
    position: "absolute",
    borderRadius: 12,
    height: 80,
    width: widthPercentageToDP(34),
    backgroundColor: "white",
    elevation: 10,
    right: 16,
    top: 24,
    zIndex: 2,
    overflow: "hidden",
  },
});

export const selectionColor = THEME.COLORS.PRIMARY.DARK;
