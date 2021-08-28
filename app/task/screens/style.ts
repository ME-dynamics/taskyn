import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.transparentWhite,
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
