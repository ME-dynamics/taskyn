import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  line: {
    width: 1,
    height: "75%",
    alignSelf: "center",
    borderColor: THEME.COLORS.PRIMARY.LIGHT,
    borderLeftWidth: 1,
  },
});
