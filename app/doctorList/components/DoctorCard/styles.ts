import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP("96"),
    height: 120,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2,
    overflow: "hidden",
    marginVertical: 5,
  },
  imageContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  patientImage: {
    width: 76,
    height: 86,
    borderRadius: 22 / 2,
  },
  infoContainer: {
    flex: 9,
  },
  titleContainer: {
    flex: 3,
    justifyContent: "center",
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  buttonContainer: {
    flex: 3,
    alignItems:"flex-end",
    justifyContent:"center",
  },
});
