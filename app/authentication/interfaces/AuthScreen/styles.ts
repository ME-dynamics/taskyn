import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  titleContainer: {
    width:widthPercentageToDP("100"), 
    height:heightPercentageToDP("31"),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection:"column",
    paddingRight: widthPercentageToDP("4"),
  },
  logoContainer:{
    left:widthPercentageToDP("5"),
  },
  title: {
    color: "white",
    fontSize: 26,
  },
  authContainer: {
    width:widthPercentageToDP("100"), 
    height:heightPercentageToDP("66"),
    backgroundColor: "white",
    borderTopLeftRadius: widthPercentageToDP("6"),
    borderTopRightRadius: widthPercentageToDP("6"),
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemsContainer: {
    marginTop: 64,
  },
  itemsMargin: {
    width: "100%",
    marginVertical: 8,
  },
  termsContainer:{
    flex:1,
    alignItems:"center",
    paddingTop:10,
  },
  terms:{
    width:widthPercentageToDP("90"),
    color: THEME.COLORS.GREY.DARK
  }
});
