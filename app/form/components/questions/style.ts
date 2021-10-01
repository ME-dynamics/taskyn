import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  QuestionContainer: {
    // padding: 30,
    width: widthPercentageToDP("100"),
    minHeight: 180,
    padding: widthPercentageToDP("5"),
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
