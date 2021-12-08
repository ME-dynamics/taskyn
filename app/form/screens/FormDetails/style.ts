import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContainer: {
    flex: 9,
  },
  imageContainer: {
    width: widthPercentageToDP("100"),
    height: heightPercentageToDP("30"),
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP("5"),
  },
  descriptionContainer: {
    width: widthPercentageToDP("100"),
    minHeight: 180,
    padding: widthPercentageToDP("5"),
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
