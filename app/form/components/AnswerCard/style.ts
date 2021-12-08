import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  answerContainer: {
    width: widthPercentageToDP("90"),
    minHeight: 48,
    flexDirection: "row-reverse",
  },
});
