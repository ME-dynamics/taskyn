import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  empty: {
    width: "100%",
    height: 256,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
    top: 0,
    right: 16,
    left: 0,
    bottom: 16,
  },
  scrollerContainerView: {
    alignItems: "center",
    paddingTop: 16,
  },
});
