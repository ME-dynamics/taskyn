import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../theme";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP("86"),
    minHeight: 42 + 24,
    alignItems: "flex-end",
    justifyContent: "space-around",
    marginTop: 16,
  },
  textContainer: {
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primaryPurple,
  },
  errorContainer: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    width: "100%",
  },
  error: {
    color: colors.error,
    marginLeft: 8,
  },
  input: {
    width: widthPercentageToDP("86"),
    height: 42,
    borderWidth: 1,
    borderRadius: 8,
  },
  flat: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderRadius: 0,
  },
  activeBorderColor: {
    borderColor: colors.primaryPurple,
  },
  disabledBorderColor: {
    borderColor: colors.transparentPurple,
  },
});
