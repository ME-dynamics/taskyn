import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "black",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 4,
    borderColor: colors.darkPurple,
    alignSelf: "center",
    top: hp("8%"),
    zIndex: 100,
  },

  body: {
    flex: 1,
    top: 90,
    justifyContent: "flex-start",
    borderRadius: 20,
  },
  bodyShadow: {
    borderRadius: 20,
    alignSelf: "center",
    //elevation: 10,
    height: hp("60%"),
    width: wp("90%"),
    zIndex: 50,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
});
