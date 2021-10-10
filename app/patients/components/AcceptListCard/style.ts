import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP("96"),
    height: 120,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2,
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
    flex: 4,
    justifyContent: "flex-start",
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"flex-end",
    bottom:15,
  }
});
