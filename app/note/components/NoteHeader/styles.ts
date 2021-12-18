import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GREY.LIGHT,
    flexDirection: "row-reverse",
  },
  backContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 16,
  },
  iconButtonContainer: {
    flex: 4,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  iconButtonWrapper: {
    marginLeft: 24,
  },
  buttonContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const iconButtonStyle = {
  size: 24,
  color: THEME.COLORS.BLACK.NORMAL,
};
