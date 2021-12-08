import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    width: widthPercentageToDP(100),
    height: 46,
    flexDirection: "column",
  },
  body: {
    width: widthPercentageToDP(100),
    flexDirection: "row-reverse",
    right: 8,
    // backgroundColor:"red",
  },
  line: {
    width: widthPercentageToDP(90),
    height: 1,
    backgroundColor: THEME.COLORS.GREY.LIGHT,
    alignSelf: "center",
  },
});
