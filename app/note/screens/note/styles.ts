import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";
const fullWidth = widthPercentageToDP("100");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },


  bodyContainer: {
    width: fullWidth,
    minHeight: heightPercentageToDP("48"),
    alignItems: "center",
    paddingTop: 12,
  },
  inputContainer: {
    marginBottom: 8,
  },
  buttonContainer: {
    width: fullWidth,
    height: heightPercentageToDP("10"),
    alignItems: "center",
    justifyContent: "center",
  },
});
