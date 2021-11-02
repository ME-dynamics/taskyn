import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { THEME } from "../../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  header: {
    flex: 3,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraIconContainer:{
    position:"absolute",
    width:30,
    height:30,
    borderRadius:30/2,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
    zIndex:10,
    left:236,
    right:0,
    bottom:0,
    top:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 4,
    borderColor: THEME.COLORS.PRIMARY.DARK,
     bottom: hp("1%"),
  },
  title: {
    color: "white",
  },
  body: {
    flex: 3,
    borderRadius: 20,
    alignSelf: "center",
    //elevation: 10,
    height: hp("60%"),
    width: wp("90%"),
  },

  bodyContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center",
  },
});
