import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../theme";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP("86"),
    height: 46 + 24,
    alignItems: "flex-end",
    justifyContent: "space-around",
    marginTop: 16
  },
  paragraph: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primaryPurple,
  },
  input: {
    width: widthPercentageToDP("86"),
    height: 46,
    borderWidth: 1,
    borderRadius: 8,
  },
  flat: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderRadius: 0
  },
  activeBorderColor: {
    borderColor: colors.primaryPurple,
  },
  disabledBorderColor: {
    borderColor: colors.transparentPurple,
  },
});
