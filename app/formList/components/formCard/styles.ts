import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.BIG,
    height: 56,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 2,
    marginVertical: 10,
    overflow:"hidden",
  },
  iconContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#FFFDE4",
    alignItems: "center",
    justifyContent: "center",
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
