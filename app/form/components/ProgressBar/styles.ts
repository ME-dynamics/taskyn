import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    alignItems: "center",
  },
  progressBar: {
    marginTop: 10,
    width: widthPercentageToDP(90),
    height: 28,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.GREY.NORMAL,
    flexDirection: "row",
    overflow: "hidden",
  },
  progressLeft: {
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  progressRight: {
    alignItems: "center",
    justifyContent: "center",
  },
  typeTitle: {
    width: widthPercentageToDP(90),
    height: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressTitle: {
    width: widthPercentageToDP(90),
    height: 30,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  progressDescription: {
    width: widthPercentageToDP(90),
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    // paddingHorizontal: widthPercentageToDP("12"),
  },
  fullLine: {
    marginTop: 10,
    width: widthPercentageToDP("90"),
    height: 1,
    backgroundColor: THEME.COLORS.TRANSPARENT.PRIMARY,
  },
  titleWithPercent: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
