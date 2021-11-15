import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  titleContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    paddingRight: widthPercentageToDP("4"),
  },
  logoContainer: {
    left: widthPercentageToDP("5"),
  },
  title: {
    fontSize: 26,
    color: "white",
  },
  bodyContainer: {
    flex: 4,
    backgroundColor: "white",
    borderTopLeftRadius: widthPercentageToDP("6"),
    borderTopRightRadius: widthPercentageToDP("6"),
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    marginHorizontal: 10,
    top: 30,
  },
  socialMedia: {
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttoncontainer: {},
});
