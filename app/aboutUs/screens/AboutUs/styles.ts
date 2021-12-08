import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: widthPercentageToDP("6"),
  },
  title: {
    fontSize: 26,
    color: "white",
  },
  bodyContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    marginHorizontal: 20,
    lineHeight: 30,
  },

  buttoncontainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
});
