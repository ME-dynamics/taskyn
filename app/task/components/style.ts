import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  checkboxContainer: {
    width: widthPercentageToDP("86"),
    minHeight: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
  },
  textContainer: {
    flexShrink: 1,
    margin: 4,
    marginRight:10,
  },
  buttonContainer:{
    flexDirection:"row",
    alignItems:"center",
  }
});
