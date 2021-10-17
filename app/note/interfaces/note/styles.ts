import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  imageContainer: {
    width: "100%",
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
    justifyContent: "center",
  },
  line: {
    width: 1,
    height: "75%",
    alignSelf: "center",
    borderColor: THEME.COLORS.PRIMARY.LIGHT,
    borderLeftWidth: 1,
  },
  bodyContainer: {
    width: "100%",
    minHeight: heightPercentageToDP("50"),
    alignItems: "center",
    paddingTop: 12
  },
  inputContainer: {
    marginBottom: 8 
  },
  buttonContainer: {
    width: "100%",
    height: heightPercentageToDP("10"),
    alignItems: "center",
    justifyContent: "center",
  },
});
