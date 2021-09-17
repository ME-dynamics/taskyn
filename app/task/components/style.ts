import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  checkboxContainer: {
    width: widthPercentageToDP("86"),
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
