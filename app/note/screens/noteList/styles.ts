import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  ScrollViewcontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
});
