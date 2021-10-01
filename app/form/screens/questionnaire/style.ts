import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 6,
  },
  answerContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  answerCart: {
    width: widthPercentageToDP("86"),
    height: 54,
    borderWidth: 1,
    borderRadius: 8,
  },
  answerCartActive: {
    borderColor: THEME.COLORS.PRIMARY.NORMAL
  },
  answerCartDeActive: {
    borderColor: THEME.COLORS.TRANSPARENT.PRIMARY,
  },
  textContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
