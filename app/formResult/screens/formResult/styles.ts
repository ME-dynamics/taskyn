import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  categoryContainer: {
    flexDirection: "row",
    width: widthPercentageToDP(100),
    height: 80,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  resultTileContainer: {
    width: widthPercentageToDP(100),
    minHeight: 530,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
});
