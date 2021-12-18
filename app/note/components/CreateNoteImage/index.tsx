import React from "react";
import { View, Image } from "react-native";
import { MotiView } from "moti";
import { observer } from "mobx-react-lite";
import { MaterialIcons } from "@expo/vector-icons";
import { IconButton, TaskynIcon } from "../../../library";

import { styles, iconButtonStyle } from "./styles";
import { ICreateNoteImageProps } from "../../types";

function CreateNoteImageComponent(props: ICreateNoteImageProps) {
  const { imageId, onCropPress, onRemovePress, path } = props;
  function cropPress() {
    onCropPress(path);
  }
  function removePress() {
    onRemovePress(path);
  }
  return (
    <MotiView
      style={styles.NoteImageContainer}
      from={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      delay={160}
    >
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
    </MotiView>
  );
}

export const CreateNoteImage = observer(CreateNoteImageComponent);
