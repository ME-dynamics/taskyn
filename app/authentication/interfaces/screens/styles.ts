import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
  },
  titleContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: widthPercentageToDP("4"),
  },
  title: {
    color: "white",
    fontSize: 26,
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
    marginVertical: 8,
  },
});
