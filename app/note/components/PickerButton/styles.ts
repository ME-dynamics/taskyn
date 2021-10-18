import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const iconStyle = {
  size: 70,
  color: THEME.COLORS.PRIMARY.DARK,
  smallSize: 32
};
