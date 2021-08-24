import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../theme";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP("86"),
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
    flex: 6,
  },
  input: {
    flex: 1,
    fontFamily: "Vazir-Regular-UI"
  },
});

export const iconStyle = {
  size: 24,
  color: colors.grey,
  selectionColor: colors.darkPurple
}