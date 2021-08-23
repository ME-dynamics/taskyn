import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../../library/theme";
export const styles = StyleSheet.create({
  row: {
    flexDirection: "row-reverse",
    width: widthPercentageToDP("86"),
    alignItems: "center",
    borderColor: colors.lightGrey,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 70,
    height: 70,
  },
  nameContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: 280,
  },
  nameTxt: {
    direction: "rtl",
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
    marginRight: 10,
  },
  mblTxt: {
    fontWeight: "200",
    color: colors.darkGrey,
    fontSize: 13,
  },
  mblTxt1: {
    left: 20,
    top: 5,
    width: 250,
  },

  msgContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  msgTxt: {
    fontWeight: "400",
    color: colors.darkPurple,
    
    fontSize: 16,
    marginRight: 12,
  },
});
