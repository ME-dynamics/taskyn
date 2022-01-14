import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
  },
  enTitle: {
    textAlign: "right",
    marginTop: 12,
  },
  descriptionContainer: {
    flex: 5,
  },
  descriptionScrollViewContent: {
    padding: 16,
  },

  formDetails: {
    flex: 1,
    flexDirection: "row",
  },
  formDetailsBody: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: widthPercentageToDP(2),
  },
  timeNeeded: {
    color: THEME.COLORS.GREY.NORMAL,
    paddingRight: 8,
  },
  testCount: {
    color: THEME.COLORS.GREY.NORMAL,
    paddingRight: 8,
  },
  startTestContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
});

export const iconStyle = {
  color: THEME.COLORS.RED.NORMAL,
  size: 24,
};
