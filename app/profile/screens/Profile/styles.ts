import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 3,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "space-between",
  },
 
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 96 / 2,
    borderWidth: 4,
    borderColor: THEME.COLORS.PRIMARY.DARK,
    //  bottom: hp("1%"),
  },
  title: {
    color: "black",
  },
  body: {
    borderRadius: 20,
    alignSelf: "center",
    //elevation: 10,
    height: hp("60%"),
    width: wp("100%"),
  },

  bodyContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
