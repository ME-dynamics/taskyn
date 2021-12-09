import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  titleContainer: {
    height: heightPercentageToDP(42),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    paddingRight: widthPercentageToDP(4),
  },
  logoContainer: {
    left: widthPercentageToDP("5"),
  },
  title: {
    fontSize: 24,
  },
  authContainer: {
    height: heightPercentageToDP(58),
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemsContainer: {
    marginTop: 64,
  },
  itemsMargin: {
    width: "100%",
    marginVertical: 8,
  },
  termsContainer: {
    width: widthPercentageToDP(90),
    alignItems: "flex-start",
    left: 6,
    paddingTop: 10,
  },
  terms: {
    width: widthPercentageToDP("80"),
    color: THEME.COLORS.GREY.DARK,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    width: widthPercentageToDP(90),
    marginVertical: 8,
  },
});

export const logoSize = 120;
