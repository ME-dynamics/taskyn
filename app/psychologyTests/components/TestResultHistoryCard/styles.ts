import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { THEME } from "../../../library";
export const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    height: 56,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 2,
    marginVertical: 8,
    overflow: "hidden",
  },
  textAlignRight: {
    textAlign: "right",
  },
  iconContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 10,
    flexDirection: "row-reverse",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  testDetailsContainer: {
    flex: 5,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center",
  },
  description: {
    textAlign: "right",
    color: THEME.COLORS.GREY.LIGHT,
  },
  dateContainer: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingTop: 10,
  },
});
