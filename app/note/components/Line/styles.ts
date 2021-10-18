import { StyleSheet } from "react-native";
import { THEME } from "../../../library";


export const styles = StyleSheet.create({
    lineVertical: {
        width: 1,
        height: "75%",
        alignSelf: "center",
        borderColor: THEME.COLORS.PRIMARY.LIGHT,
        borderLeftWidth: 1,
      },
      lineHorizontal: {
        width: "75%",
        height: 1,
        alignSelf: "center",
        borderColor: THEME.COLORS.PRIMARY.LIGHT,
        borderTopWidth: 1,
      },
})