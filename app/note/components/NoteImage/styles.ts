import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  imageContainer: {
    width: 110,
    height: heightPercentageToDP(24),
    borderRadius: 8,
    overflow: "hidden",
    marginLeft: 16,
  },
  image: {
    width: 110,
    height: heightPercentageToDP(24),
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 2,
    paddingHorizontal: 2,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.TRANSPARENT.WHITE,
  },
});

export const iconStyle = {
  size: 28,
  color: THEME.COLORS.PRIMARY.LIGHT,
  activeColor: THEME.COLORS.PRIMARY.DARK,
};

export const activityColor = THEME.COLORS.PRIMARY.NORMAL;