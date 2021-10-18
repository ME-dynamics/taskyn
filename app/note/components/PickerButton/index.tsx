import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { Subheading, Paragraph, Touchable } from "../../../library";
import { styles, iconStyle } from "./styles";
import { IPickerButtonProps } from "../../types";
export function PickerButton(props: IPickerButtonProps) {
  const { mode, onPress, small } = props;
  const { color, size, smallSize } = iconStyle;
  const text = mode === "camera" ? "دوربین" : "گالری";
  const iconSize = small ? smallSize : size;
  return (
    <View style={styles.container}>
      {mode === "camera" ? (
        <MaterialCommunityIcons
          name={"camera-outline"}
          color={color}
          size={iconSize}
        />
      ) : (
        <MaterialIcons name={"add-photo-alternate"} color={color} size={iconSize} />
      )}
      {small ? <Paragraph>{text}</Paragraph> : <Subheading>{text}</Subheading>}

      <Touchable rippleColor={"lightGrey"} onPress={onPress} />
    </View>
  );
}
