import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    marginVertical: 24,
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    backgroundColor: THEME.COLORS.GREY.LIGHT,
    alignSelf: "center",
  },
  inputContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(10),
    alignItems: "center",
  },
  buttonContainer: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(50),
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: 44,
  },
  cameraIconContainer: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#EEE5FF",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    left: 80,
    right: 0,
    bottom: 0,
    top: 80,
  },
  sheetContainer: {
    flex: 1,
    // padding: 24,
    backgroundColor: "rgba(0, 0, 0, 0.36);",
  },
  sheetContentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
