import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    marginVertical: 6,
    paddingRight: 16
  },
  paragraph: {
    paddingLeft: 8,
    color: THEME.COLORS.GREY.DARK,
  },
});

export const radioSize = 24;
