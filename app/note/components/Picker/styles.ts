import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(34),
    padding: 20,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  pickerContainer: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    borderRadius: 8,
    flexDirection: "row-reverse",
    overflow: "hidden",
  },
  scrollViewContainer: {
    flex: 6,
  },

  scrollViewContent: {
    alignItems: "center",
    paddingLeft: 8
  },

  picker: {
    flex: 1,
  },
  noneImagePicker: {
    flexDirection: "row",
  },
});
