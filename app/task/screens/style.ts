import { StyleSheet } from "react-native";
import { THEME } from "../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:THEME.COLORS.BACKGROUND,
  },
  titleContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  taskContainer: {
    flex: 8,
    paddingTop: 50,
    //width: widthPercentageToDP("86"),
   
  },
  scrollViewContainer:{flex:1},
  containerContentStyle:{alignItems:"center"},
  buttonContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
