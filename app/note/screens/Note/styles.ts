import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  titleInputContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(8),
  },
  noteInputContainer: {
    width: widthPercentageToDP(100),
    minHeight: heightPercentageToDP(24),
  },
  horizontalLine: {
    width: THEME.WIDTH.WIDE,
    height: StyleSheet.hairlineWidth,
    borderRadius: 0.5,
    backgroundColor: THEME.COLORS.GREY.NORMAL,
    alignSelf: "center",
  },
});
