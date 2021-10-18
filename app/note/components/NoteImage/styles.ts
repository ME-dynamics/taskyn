import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: heightPercentageToDP(22),
    borderRadius: 8,
    overflow: "hidden",
    marginHorizontal: 6,
    transform: [{ scaleX: -1 }],

  },
  image: {
    width: 100,
    height: heightPercentageToDP(22),
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 2,
    paddingHorizontal: 2,
  },
});

export const iconStyle = {
  size: 28,
  color: THEME.COLORS.PRIMARY.LIGHT,
  activeColor: THEME.COLORS.PRIMARY.DARK,
};
