import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../../library/theme";
export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP("86"),
    height: 86,
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
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
  },
  infoContainer: {
    flex: 10,
  },
  titleContainer: {
    flex: 3,
    justifyContent: "flex-end",
  },
  descriptionContainer: {
    flex: 4,
    justifyContent: "center",
  },
});
