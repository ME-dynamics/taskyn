import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
  },
  progressBar: {
    marginTop: 10,
    width: widthPercentageToDP(90),
    height: 16,
    borderRadius: 4,
    backgroundColor: THEME.COLORS.GREY.LIGHT,
    flexDirection: "row",
    overflow: "hidden",
  },
  progressLeft: {
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
    alignItems: "center",
    justifyContent: "center",
  },
  progressRight: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:"blue"
  },
  typeTitle: {
    width: widthPercentageToDP(90),
    height: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressTitle: {
    width: widthPercentageToDP(100),
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  progressDescription: {
    width: widthPercentageToDP(100),
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: widthPercentageToDP("12"),
  },
  fullLine: {
    marginTop: 10,
    width: widthPercentageToDP("90"),
    height: 1,
    backgroundColor: THEME.COLORS.TRANSPARENT.PRIMARY,
  },
});
