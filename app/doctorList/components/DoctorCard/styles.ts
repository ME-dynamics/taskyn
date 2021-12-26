import { StyleSheet } from "react-native";
import { THEME } from "../../../library";

export const styles = StyleSheet.create({
  container: {
    width: THEME.WIDTH.WIDE,
    height: 56,
    flexDirection: "row-reverse",
    alignSelf: "center",
    marginVertical: 12,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    flex: 2,
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 12,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 16,
  },
  infoContainer: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
});
