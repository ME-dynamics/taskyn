import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  codeFieldRoot: {
    flex: 1,
    marginLeft:16,
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
    borderRadius: 10,
  },
  line:{
    width:36,
    height:2,
    lineHeight: 38,
    fontSize: 24,
    textAlign: "center",
    backgroundColor:"black",
  },
  focusCell: {
    borderColor: "blue",
  },
});
