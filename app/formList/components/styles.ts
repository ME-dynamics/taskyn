import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../library";
export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP("86"),
    height: 66,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2,
    overflow: "hidden",
  },
  iconContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  formIcon: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
  },
  infoContainer: {
    flex: 10,
  },
  persianNameContainer: {
    flex: 2,
    justifyContent: "flex-end",
  },
  englishNameContainer: {
    flex: 2,
    justifyContent: "center",
    
  },
});
