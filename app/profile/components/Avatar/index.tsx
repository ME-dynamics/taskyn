import React from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { MaterialIcons } from "@expo/vector-icons";
import { TaskynIcon, Tap } from "../../../library";

import { styleGen } from "./styles";
import { IAvatarProps } from "../../types";

function AvatarComponent(props: IAvatarProps) {
  const { size, uri, edit, onEditPress } = props;
  const { styles, profileIconStyle, cameraIconStyle } = styleGen(size);
  function onPress() {
    if (edit && onEditPress) {
      onEditPress();
    }
  }
  return (
    <Tap onPress={onPress}>
      <View style={styles.container}>
        {uri ? (
          <Image style={styles.image} source={{ uri }} />
        ) : (
          <MaterialIcons
            name={"person"}
            size={profileIconStyle.size}
            color={profileIconStyle.color}
          />
        )}
        {edit ? (
          <View style={styles.cameraContainer}>
            <TaskynIcon
              name={"camera"}
              size={cameraIconStyle.size}
              color={cameraIconStyle.color}
            />
          </View>
        ) : null}
      </View>
    </Tap>
  );
}

export const Avatar = observer(AvatarComponent);
