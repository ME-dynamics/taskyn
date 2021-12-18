import React from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { MaterialIcons } from "@expo/vector-icons";
import { IconButton, TaskynIcon } from "../../../library";

import { styles, iconButtonStyle } from "./styles";
import { INoteImageProps } from "../../types";

function NoteImageComponent(props: INoteImageProps) {
  const { imageId, onCropPress, onRemovePress, path } = props;
  function cropPress() {
    onCropPress(path);
  }
  function removePress() {
    onRemovePress(path);
  }
  return (
    <View style={styles.NoteImageContainer}>
      <Image style={styles.image} source={{ uri: path }} />
      <View style={styles.controlContainer}>
        <IconButton
          size={iconButtonStyle.size}
          color={iconButtonStyle.color}
          Icon={({ size, color }) => {
            return <TaskynIcon name={"close"} size={size} color={color} />;
          }}
          onPress={removePress}
        />
        <IconButton
          size={iconButtonStyle.size}
          color={iconButtonStyle.color}
          Icon={({ size, color }) => {
            return <MaterialIcons name={"crop"} size={size} color={color} />;
          }}
          onPress={cropPress}
        />
      </View>
    </View>
  );
}

export const NoteImage = observer(NoteImageComponent);
