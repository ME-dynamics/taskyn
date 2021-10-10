import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fafafa",
  },
  searchBarContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row-reverse",
  },
  patientCardContainer: {
    flex: 9,
    alignItems:"center",
  },
  iconContainer: {
    width:widthPercentageToDP("10"),
    height:"100%",

    alignItems: "center",
    justifyContent: "center",
  },
  redCircle: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    backgroundColor: THEME.COLORS.RED,
  },
  numberStyle: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  redCircleContainer: {
    position:"absolute",
    top:10,
    right:2

  },
});
