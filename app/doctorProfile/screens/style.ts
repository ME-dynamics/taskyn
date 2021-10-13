import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { THEME } from "../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  topBackground: {
    flex: 2,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 4,
    borderColor: THEME.COLORS.PRIMARY.DARK,
    alignSelf: "center",
    top: hp("4%"),
  },

  body: {
    flex: 3,
    borderRadius: 20,
    alignSelf: "center",
    //elevation: 10,
    height: hp("60%"),
    width: wp("90%"),
  },

  bodyContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  botbackground: {
    flex: 6,
    top:-100,
    alignItems: "center",
    justifyContent: "center",
  },
});
