import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { Skeleton } from "moti/skeleton";
import { IconButton, Tap, TaskynIcon, storage } from "../../../library";
import { styles, iconButtonStyle } from "./styles";
import { INoteImageProps } from "../../types";
import { noteListState } from "../../entities";
function NoteImageComponent(props: INoteImageProps) {
  const { id, onImagePress, onRemovePress } = props;
  const [imageUrl, setImageUrl] = useState<string>("");
  function imagePress() {
    onImagePress(id);
  }
  function removePress() {
    onRemovePress(id);
  }
  useEffect(() => {
    const imagePath = storage.retrieve(id, "string");
    if (typeof imagePath === "string") {
      console.log(imagePath);
      setImageUrl(imagePath);
    }
  }, []);
  // get the url
  // wait with moti skeleton
  // render image
  return (
    <View style={styles.container}>
      <Skeleton show={!imageUrl} radius={4} colorMode={"light"}>
        {imageUrl ? (
          <Tap onPress={imagePress}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </Tap>
        ) : (
          <View style={styles.image} />
        )}
      </Skeleton>
      {noteListState.currentNote?.edit ? (
        <View style={styles.closeIcon}>
          <IconButton
            onPress={removePress}
            color={iconButtonStyle.color}
            size={iconButtonStyle.size}
            Icon={({ size, color }) => {
              return <TaskynIcon name={"close"} color={color} size={size} />;
            }}
          />
        </View>
      ) : null}
    </View>
  );
}

export const NoteImage = observer(NoteImageComponent);
