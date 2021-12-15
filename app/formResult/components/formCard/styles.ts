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
    elevation: 3,
    marginVertical: 10,
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
    flexDirection: "row-reverse",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bodyContainer: {
    flex: 3,
  },
  answerContainer: {
    flex: 1,
    justifyContent: "center",
  },
  dateContainer: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 8,
    right: 10,
  },
});
