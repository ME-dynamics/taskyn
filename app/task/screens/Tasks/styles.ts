import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  inputContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(14),
    alignItems: "center",
    justifyContent: "center",
  },
  taskContainer: {
    flex: 1,
    paddingTop: 20,
  },
  scrollViewContainer: {
    flex: 1,
  },
  containerContentStyle: { alignItems: "center" },
  buttonContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(10),
    alignItems: "center",
    justifyContent: "center",
  },
});

