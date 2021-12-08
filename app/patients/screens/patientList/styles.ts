import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  scrolViewContainer: {
    flex: 1,
  },
  titleContainer: {
    width: widthPercentageToDP("100"),
    height: heightPercentageToDP("10"),
    alignItems: "center",
    justifyContent: "center",
  },
  requestContainer: {
    width: widthPercentageToDP(90),
    height: 72,
    elevation: 2,
    borderRadius: 12,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    overflow: "hidden",
  },
  line: {
    width: widthPercentageToDP(90),
    marginTop: 16,
    height: 1,
    backgroundColor: THEME.COLORS.GREY.LIGHT,
  },
  searchBarContainer: {
    width: widthPercentageToDP("100"),
    height: heightPercentageToDP("10"),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row-reverse",
  },
  patientCardContainer: {
    width: widthPercentageToDP("90"),
    minHeight: heightPercentageToDP("30"),
    alignItems: "flex-end",
  },
  iconContainer: {
    width: widthPercentageToDP("18"),
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  redCircle: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    backgroundColor: THEME.COLORS.RED.NORMAL,
  },
  numberStyle: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  redCircleContainer: {
    position: "absolute",
    top: 10,
    right: 40,
    zIndex: 1000,
  },
  containerContentStyle: {
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 32 / 2,
    backgroundColor: "#EEE5FF",
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 10,
  },
  title: {
    flex: 1,
    justifyContent: "center",
  },
});
