import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row-reverse",
  },
  patientCardContainer: {
    flex: 9,
    //alignItems:"center",
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  redCircle: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    backgroundColor: "#e94c57",
  },
  numberStyle: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  redCircleContainer: {
    position:"absolute",
    paddingTop:5,


  },
});
