import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Caption } from "../Typography";

import { styles } from "./styles";
function NetInfoComponent() {
  return (
    <View style={styles.netInfoContainer}>
      <Caption style={styles.netInfoCaption}>{"آفلاین"}</Caption>
    </View>
  );
}

export const NetInfo = observer(NetInfoComponent);
