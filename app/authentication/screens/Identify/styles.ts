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
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(44),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    paddingRight: widthPercentageToDP(4),
  },
  logoContainer: {
    left: widthPercentageToDP("5"),
  },
  title: {
    alignSelf: "flex-end",
  },
  textFieldContainer: {
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(12),
    alignSelf: "center",
    paddingRight: widthPercentageToDP(2),
  },
  textButtonContainer: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(6),
    alignItems: "flex-end",
    left: 50,
    bottom: 20,
  },
  codeFieldRoot: {
    flex: 1,
    marginLeft: 16,
  },
  cell: {
    width: 40,
    height: 40,
    borderWidth: 2,
    // borderColor: THEME.COLORS.GREY.NORMAL,
    borderBottomColor: "red",
    borderRightColor: "transparent",
    textAlign: "center",
    borderRadius: 0,
  },
  phoneNumber: {
    color: THEME.COLORS.PRIMARY.NORMAL,
  },
  enterCodeText: {
    paddingTop: 12,
  },
  line: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: THEME.COLORS.GREY.NORMAL,
    borderRadius: 0,
  },
  focusCell: {
    borderColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  timerContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    height: heightPercentageToDP(22),
    alignItems: "center",
    top: 40,
    justifyContent: "center",
  },
});
export const logoSize = 120;
