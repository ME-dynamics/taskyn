import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  tile: {
    width: widthPercentageToDP(80),
    height: 100,
    marginVertical: 6,
    flexDirection: "column",
    alignItems: "center",
  },
  body: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  line: {
    width: widthPercentageToDP("80"),
    height: StyleSheet.hairlineWidth,
    backgroundColor: THEME.COLORS.TRANSPARENT.PRIMARY,
  },
  coloredline: {
    width: 2,
    left: 20,
    height: "64%",
    backgroundColor: THEME.COLORS.PRIMARY.LIGHT,
  },
  bodyContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  titleContainer: {
    width: "76%",
    height: "50%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  answerContainer: {
    width: "76%",
    height: "50%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
