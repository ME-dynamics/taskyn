import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(66),
    height: 72,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 4,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  patientImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 9,
    paddingRight: 8,
  },
  titleContainer: {
    flex: 3.7,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
});
