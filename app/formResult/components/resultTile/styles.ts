import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  tile: {
    width: widthPercentageToDP(90),
    height: 100,
    marginVertical: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  body: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  line: {
    width: widthPercentageToDP("90"),
    height: StyleSheet.hairlineWidth,
    backgroundColor: THEME.COLORS.TRANSPARENT.PRIMARY,
  },
  coloredline: {
    width: 2,
    right: 10,
    height: "64%",
    backgroundColor: THEME.COLORS.PRIMARY.LIGHT,
  },
  bodyContainer: {
    flex: 1,
  },

  titleContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  answerContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
