import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  netInfoContainer: {
    width: widthPercentageToDP(100),
    height: 18,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
    alignItems: "center",
    justifyContent: "center",
  },
  netInfoCaption: {
    color: "white",
    textAlign: "center",
  },
});
