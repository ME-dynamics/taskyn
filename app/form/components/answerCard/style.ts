import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../../library";

export const styles = StyleSheet.create({
  answerContainer: {
    width: widthPercentageToDP("100"),
    minHeight: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  answerCard: {
    width: widthPercentageToDP("90"),
    minHeight: 54,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    paddingVertical: 6,
    borderColor: colors.darkGrey,
  },
  answerCardActive: {
    borderWidth: 1,
    borderColor: colors.darkPurple,
  },

  textContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
  },
});
