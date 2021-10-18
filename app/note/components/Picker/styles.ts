import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(30),
    padding: 20,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  pickerContainer: {
    flex: 1,
    backgroundColor: THEME.COLORS.TRANSPARENT.WHITE,
    borderRadius: 8,
    flexDirection: "row-reverse",
    overflow: "hidden",
  },
  scrollViewContainer: {
    flex: 6,
  },
  scrollView: {
    flex: 1,
    transform: [{ scaleX: -1 }],
  },
  scrollViewContent: {
      alignItems: "center"
  },
  
  picker: {
      flex: 1
  },
  noneImagePicker: {
      flexDirection: "row"
  }
});

