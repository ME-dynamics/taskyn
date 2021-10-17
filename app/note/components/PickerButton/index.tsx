import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { Subheading, Touchable } from "../../../library";
import { styles, iconStyle } from "./styles";
import { IPickerButtonProps } from "../../types";
export function PickerButton(props: IPickerButtonProps) {
  const { mode, onPress } = props;
  const { color, size } = iconStyle;
  const text = mode === "camera" ? "دوربین" : "گالری";
  return (
    <View style={styles.container}>
      {mode === "camera" ? (
        <MaterialCommunityIcons
          name={"camera-outline"}
          color={color}
          size={size}
        />
      ) : (
        <MaterialIcons name={"add-photo-alternate"} color={color} size={size} />
      )}

      <Subheading>{text}</Subheading>
      <Touchable rippleColor={"lightGrey"} onPress={onPress} />
    </View>
  );
}
