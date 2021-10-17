import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    width: widthPercentageToDP("100"),
    height: heightPercentageToDP("10"),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  formCardContainer: {
    width: widthPercentageToDP("100"),
    height: heightPercentageToDP("90"),
    alignItems: "center",
  },
  containerContentStyle: { alignItems: "center" },
});
