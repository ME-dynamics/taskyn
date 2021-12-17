import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    alignItems: "center",
  },
  title: {
    flex: 1,
  },
  body: {
    flex: 7,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    bottom: 80,
    right: 0,
    left: 20,
  },
  popUp: {
    position: "absolute",
    top: 206,
    right: 0,
    left: 10,
    bottom: 0,
  },
});
