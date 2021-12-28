import { StyleSheet } from "react-native";
import { THEME } from "../../../library";
import { material } from "react-native-typography";

export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.WIDE,
    minHeight: 110,
    backgroundColor: "white",
    borderRadius: 6,
    elevation: 2,
    marginVertical: 12,
  },
  textContainer: {
    width: "100%",
    minHeight: 56,
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  header: {
    height: 32,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 8,
  },
  footer: {
    height: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  doneParagraph: {
    color: THEME.COLORS.GREEN,
    alignSelf: "flex-start",
    marginLeft: 12,
  },
  makeDoneContainer: {
    alignSelf: "flex-start",
  },
  makeDoneParagraph: {
    color: THEME.COLORS.SECONDARY.NORMAL,
  },
  textInput: {
    ...material.body1Object,
    fontFamily: THEME.FONTS.REGULAR,
    padding: 0,
    margin: 0,
    lineHeight: 24,
  },
});

export const selectionColor = THEME.COLORS.PRIMARY.DARK;
export const menuColor = THEME.COLORS.GREY.DARK;
