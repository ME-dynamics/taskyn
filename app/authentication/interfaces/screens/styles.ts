import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { colors } from "../../../library";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryPurple,
  },
  titleContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: widthPercentageToDP("4"),
  },
  title: {
    color: "white",
  },
  authContainer: {
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: widthPercentageToDP("6"),
    borderTopRightRadius: widthPercentageToDP("6"),
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemsContainer: {
    marginTop: 64,
  },
  itemsMargin: {
    width: "100%",
    marginVertical: 8
  }
});
