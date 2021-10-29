import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";



export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP("90"),
    height: 110,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  patientImage: {
    width: 76,
    height: 86,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 9,
    paddingRight: 8
  },
  titleContainer: {
    flex: 3.7,
    justifyContent: "center",
  },
  buttonContainer:{
    flex: 3,
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems: "flex-start",
  },
});
