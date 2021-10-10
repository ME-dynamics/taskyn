import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 3,
  },
  buttonContainer: {
    flex: 7,
  },
  noteContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: 152,
    height: 152,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    shadowRadius: 2,
    shadowColor: "black",
    elevation: 1
  },
});
