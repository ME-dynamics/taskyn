import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../theme";

export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.BIG,
    height: 36,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 2,
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-start",
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
  size: 28,
  color: THEME.COLORS.GREY.DARK,
  selectionColor: THEME.COLORS.PRIMARY.DARK,
};
