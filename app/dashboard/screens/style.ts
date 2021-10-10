import { StyleSheet } from "react-native";
const BORDER_RADIUS = 8;
const ELEVATION = 1;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 3,
  },
  buttonContainer: {
    flex: 7,
  },
  firstButtonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  secondButtonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  historyButton: {
    width: 152,
    height: 152,
    elevation: ELEVATION,
    borderRadius: BORDER_RADIUS,
  },
  formButton: {
    width: 152,
    height: 152,
    elevation: 1,
    borderRadius: BORDER_RADIUS,
  },
  patientFileButton: {
    width: 152,
    height: 152,
    elevation: ELEVATION,
    borderRadius: BORDER_RADIUS,
  },
  taskButton: {
    width: 152,
    height: 152,
    elevation: ELEVATION,
    borderRadius: BORDER_RADIUS,
  },
  noteContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
  },
  noteButton: {
    width: 152,
    height: 152,
    elevation: ELEVATION,
    borderRadius: BORDER_RADIUS,
  },
});
