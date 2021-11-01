import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 6,
  },
  checkboxContainer: {
    width: THEME.WIDTH.BIG,
    minHeight: 56,
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
  },
  textContainer: {
    flexShrink: 1,
    padding: 8,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-around",
    paddingLeft: 8,
  },
  dateContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 8,
  },
  footer: {
    flexDirection: "row-reverse",
  },
});
