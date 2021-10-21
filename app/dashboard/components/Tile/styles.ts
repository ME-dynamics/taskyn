import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const styles = StyleSheet.create({
  container: {
    width: 154,
    height: 154,
    backgroundColor: "white",
    borderRadius: 8,
    shadowRadius: 2,
    shadowColor: "black",
    elevation: 2,
    overflow:"hidden",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
});



export const iconStyle = {
  color: THEME.COLORS.PRIMARY.NORMAL,
  size: 40
}