import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  titleContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  taskContainer: {
    flex: 8,
    paddingTop: 50,
    //width: widthPercentageToDP("86"),
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
