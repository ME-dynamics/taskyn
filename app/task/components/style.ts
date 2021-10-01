import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../library";

export const styles = StyleSheet.create({
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
    padding:8,
  },
  buttonContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-evenly",
    paddingHorizontal: 32
  }
});
