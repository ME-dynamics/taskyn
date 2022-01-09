import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
  },
  descriptionContainer: {
    flex: 5,
  },
  descriptionScrollViewContent: {
    padding: 16,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "column",
  },
  formDetails: {
    flex: 1,
    flexDirection: "row",
  },
  formDetailsBody: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    left: 10,
    justifyContent: "center",
  },
});
