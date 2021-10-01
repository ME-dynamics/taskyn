import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../theme";

export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.BIG,
    height: 56,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 8,
  },
  input: {
    flex: 1,
    fontFamily: "Vazir-Regular-UI",
  },
});

export const iconStyle = {
  size: 24,
  color: THEME.COLORS.GREY.NORMAL,
  selectionColor: THEME.COLORS.PRIMARY.DARK,
};
