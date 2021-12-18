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
    // alignItems: "center",
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
    // zIndex:1,
  },
  scrollViewContainer: {
    flex: 1,
  },
  containerContentStyle: { alignItems: "center" },
  buttonContainer: {
    // width: widthPercentageToDP(100),
    // height: heightPercentageToDP(10),
    // alignItems: "center",
    // justifyContent: "center",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
    top: 0,
    right: 16,
    left: 0,
    bottom: 16,
    // zIndex:10000,
  },
  line: {
    width: widthPercentageToDP(90),
    height: 1,
    marginTop: 6,
    marginBottom: 10,
    backgroundColor: "#D8D8D8",
  },
});
