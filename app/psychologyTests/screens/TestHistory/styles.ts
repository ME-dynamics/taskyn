import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const iconButtonColor= THEME.COLORS.PRIMARY.NORMAL;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  categoryContainer: {
    flexDirection: "column",
    width: widthPercentageToDP(90),
    height: 56,
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: THEME.COLORS.GREY.LIGHT,
  },
  historyCardScroller: {
    alignItems: "center",
  },
});
