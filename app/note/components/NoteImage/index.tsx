import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { Skeleton } from "moti/skeleton";
import { IconButton, Tap, TaskynIcon } from "../../../library";
import { styles, iconButtonStyle } from "./styles";
import { INoteImageProps } from "../../types";
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
    setTimeout(() => {
      setImageUrl(
        "https://cdn01.zoomit.ir/2020/11/samsung-galaxy-note-20-a-e02d9d5cbf30048f.jpg?w=768"
      );
    }, 2000);
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
    </View>
  );
}

export const NoteImage = observer(NoteImageComponent);
