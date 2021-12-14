import React, { useEffect, useCallback } from "react";
import { View, Linking, Platform } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { observer } from "mobx-react-lite";
import { autorun } from "mobx";
import { Subheading } from "../Typography";
import { TaskynIcon } from "../TaskynIcon";
import { netInfoState } from "../netInfo";
import { styles, translateNetInfoStart, iconStyle } from "./styles";
function NetInfoComponent() {
  const { size, color } = iconStyle;
  const translateY = useSharedValue(translateNetInfoStart);
  const netInfoStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  useEffect(() => {
    const disposer = autorun(() => {
      if (netInfoState.hasAccess) {
        translateY.value = withTiming(translateNetInfoStart, { duration: 500 });
      } else {
        translateY.value = withTiming(0, { duration: 500 });
      }
      return () => {
        disposer();
      };
    });
  }, []);
  async function openSettings() {
    try {
      Platform.OS === "ios"
        ? await Linking.openURL("app-settings:")
        : await Linking.openURL("settings:");
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <Animated.View style={[styles.netInfoContainer, netInfoStyles]}>
      <View style={styles.iconContainer}>
        <View style={styles.iconBox}>
          <TaskynIcon name={"disconnected"} size={size} color={color} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Subheading style={styles.infoText}>
          {"شما آفلاین هستید، لطفا اینترنت خود را روشن کنید."}
        </Subheading>
      </View>
    </Animated.View>
  );
}

export const NetInfo = observer(NetInfoComponent);
