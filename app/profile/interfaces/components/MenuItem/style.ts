import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../../library";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 72,
    paddingLeft: 14,
    paddingRight: 10,
  },
  collapsedContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  plainHeight: {
    height: 72,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 200,
    marginVertical: 2,
    letterSpacing: 0.4,
  },
  line: {
    width: widthPercentageToDP("80"),
    height: 1,
    backgroundColor: THEME.COLORS.TRANSPARENT.PRIMARY,
  },
  title: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 26,
  },
});
