import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  searchBarContainer: {
    width: widthPercentageToDP("100"),
    height: heightPercentageToDP("10"),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row-reverse",
  },
  doctorCardContainer: {
    width: widthPercentageToDP("100"),
    height: heightPercentageToDP("90"),
    alignItems: "center",
  },
  iconContainer: {
    width: widthPercentageToDP("10"),
    height: "100%",
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
    position: "absolute",
    top: 10,
    right: 2,
  },
  containerContentStyle: {
     alignItems: "center",
 
},
});
