import { StyleSheet } from "react-native";
import { THEME } from "../../library";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: THEME.COLORS.TRANSPARENT.PRIMARY,
    margin: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraText:{
    bottom:20,
  },
  bodyContainer: {
    flex: 3,
    alignItems: "center",
  },
  noteStyle: {
    flex: 4,
  },
  buttonContainer: {
    flex: 1,
  },
});
