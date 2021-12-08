import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    height: 60,
    paddingTop:10,
    // paddingLeft: 14,
    // paddingRight: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: "#EEE5FF",
    alignItems: "center",
    justifyContent: "center",
  },
  collapsedContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  plainHeight: {
    // height: 72,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 200,
    marginVertical: 2,
    letterSpacing: 0.4,
  },
  line: {
    width: widthPercentageToDP("90"),
    height: 1,
    backgroundColor: "#F2F2F2",
  },
  title: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 26,
  },
});
