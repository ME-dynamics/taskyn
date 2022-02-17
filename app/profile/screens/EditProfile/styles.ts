import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  profileImageContainer: {
    width: "100%",
    height: heightPercentageToDP(26),
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "100%",
    height: heightPercentageToDP(46),
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    height: heightPercentageToDP(10),
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    marginHorizontal: "5%",
  },
});
