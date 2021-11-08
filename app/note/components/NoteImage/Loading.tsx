import React from "react";
import { observer } from "mobx-react-lite";
import { View, ActivityIndicator } from "react-native";
import { styles, activityColor } from "./styles";
function LoadingComponent() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={"large"} color={activityColor} />
    </View>
  );
}

export const Loading = observer(LoadingComponent);
