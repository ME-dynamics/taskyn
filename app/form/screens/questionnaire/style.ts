import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  QuestionContainer: {
    flex: 4,
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
    borderColor: colors.primaryPurple,
  },
  answerCartDeActive: {
    borderColor: colors.transparentPurple,
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
