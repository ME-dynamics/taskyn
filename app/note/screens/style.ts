import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { THEME } from "../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  imageContainer: {
    flex: 2,
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
    flex: 5,
  },
  noteStyle: {
    flex: 4,
  },
  inputs: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    // paddingBottom:50,
  },
  note: {
    height: heightPercentageToDP("30"),
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
