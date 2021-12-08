import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContaienr: {
    alignItems: "flex-end",
  },
  scrollView: {
    width: widthPercentageToDP("90"),
    minHeight: heightPercentageToDP("30"),
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    bottom: 15,
  },
});
