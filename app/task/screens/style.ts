import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:THEME.COLORS.BACKGROUND,
  },
  titleContainer: {
    width:widthPercentageToDP("100"),
    height:heightPercentageToDP("10"),
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width:widthPercentageToDP("100"),
    height:heightPercentageToDP("10"),
    alignItems: "center",
    justifyContent: "center",
  },
  taskContainer: {
    width:widthPercentageToDP("100"),
    height:heightPercentageToDP("64"),
    paddingTop: 20,
    //width: widthPercentageToDP("86"),
   
  },
  scrollViewContainer:{
    flex:1,
  },
  containerContentStyle:{alignItems:"center"},
  buttonContainer: {
    width:widthPercentageToDP("100"),
    height:heightPercentageToDP("10"),
        alignItems: "center",
    justifyContent: "center",
  },
});
