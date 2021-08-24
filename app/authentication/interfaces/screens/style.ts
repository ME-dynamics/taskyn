import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80ffcb",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  loginBox: {
    backgroundColor: "white",
    height: hp("100%"),
    width: wp("100%"),
    //flex : 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    elevation: 5,
    paddingBottom: 20,
  },
  loginTitle: {
    marginTop: 30,
    textAlign: "right",
    fontSize: 50,
    paddingTop: 10,
    paddingRight: 20,
  },
  loginTitle1: {
    marginTop: 20,
    textAlign: "right",
    fontSize: 50,
    paddingTop: 10,
    paddingBottom: 30,
    paddingRight: 20,
  },
  inputGroups: {
    margin: 5,
    marginRight: 20,
    marginLeft: 20,
  },
  inputGroups1: {
    alignItems: "center",
    marginTop: 20,
  },
  labelText: {
    marginTop: 80,
    textAlign: "right",
    marginBottom: 10,
    fontSize: 16,
    color: "#5256c9",
    fontWeight: "bold",
  },
  inputText: {
    textAlign: "right",
    borderColor: "#e6c2ef",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    height: 40,
  },
});
