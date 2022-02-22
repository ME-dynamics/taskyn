import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "95%",
    minHeight: 80,
    marginVertical: 5,
    flexDirection: "row-reverse",
    elevation: 2,
    // borderRadius: 16,
  },
  TextContainer: {
    flex: 20,
    flexDirection: "column",
    paddingRight: 10,
    justifyContent: "center",
  },
  colorTypeContainer: {
    width: 20,
    height: 80,
    backgroundColor: "red",
  },
  row: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  sideBarColorr: {
    flex: 0.5,
    backgroundColor: "red",
  },
});
