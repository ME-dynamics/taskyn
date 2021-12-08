import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  categoryContainer: {
    flexDirection: "column",
    width: widthPercentageToDP(100),
    height: 56,
    alignItems: "flex-end",
    justifyContent: "space-around",
  },

  resultTileContainer: {
    top: 12,
    width: widthPercentageToDP(100),
    minHeight: 530,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  line: {
    width: widthPercentageToDP(90),
    height: 1,
    alignSelf: "center",
    backgroundColor: THEME.COLORS.GREY.LIGHT,
  },
});
