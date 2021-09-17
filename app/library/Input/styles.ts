import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../theme";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP("86"),
    minHeight: 42 + 26,
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  textContainer: {
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingBottom: 4,
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
  inputFont: {
    fontFamily: "Vazir-Regular-UI"
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
  timerColor: {
    color: colors.primaryPurple
  }
});
