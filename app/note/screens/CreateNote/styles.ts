import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

// TODO: fix width and heights based on enabled header

export const styles = StyleSheet.create({
  horizontalLine: {
    width: THEME.WIDTH.WIDE,
    height: StyleSheet.hairlineWidth,
    borderRadius: 0.5,
    backgroundColor: THEME.COLORS.GREY.NORMAL,
    alignSelf: "center",
  },
  titleInputContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(8),
  },
  NoteInputContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(56),
  },
  pickImageContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(20),
    flexDirection: "row-reverse",
  },
  imageListContainer: {
    flex: 9,
    paddingBottom: 8,
    paddingRight: widthPercentageToDP(5),
  },
  attachButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 18,
    paddingLeft: widthPercentageToDP(2.5),
  },
  submitButtonContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(11),
    alignItems: "center",
    justifyContent: "center",
  },
  attachPopUp: {
    position: "absolute",
    left: 10,
    bottom: heightPercentageToDP(10),
  },
});
