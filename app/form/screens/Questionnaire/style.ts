import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  scrollview: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 5,
  },
  headerContiner: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
  },
  answerCartActive: {
    borderColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  answerCartDeActive: {
    borderColor: THEME.COLORS.TRANSPARENT.PRIMARY,
  },
  textContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
