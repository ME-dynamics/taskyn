import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";
const fullWidth = widthPercentageToDP("100");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  imageContainer: {
    width: fullWidth,
    height: heightPercentageToDP("28"),
    padding: 20,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  cameraIcon: {
    flex: 1,
    backgroundColor: THEME.COLORS.TRANSPARENT.WHITE,
    borderRadius: 8,
    flexDirection: "row",
  },
  cameraText: {
    alignItems: "center",
  },
  cameraButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },

  bodyContainer: {
    width: fullWidth,
    minHeight: heightPercentageToDP("50"),
    alignItems: "center",
    paddingTop: 12,
  },
  inputContainer: {
    marginBottom: 8,
  },
  buttonContainer: {
    width: fullWidth,
    height: heightPercentageToDP("10"),
    alignItems: "center",
    justifyContent: "center",
  },
});
