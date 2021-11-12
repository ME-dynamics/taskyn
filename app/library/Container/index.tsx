import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { observer } from "mobx-react-lite";
import { netInfoState } from "../netInfo";
import { NetInfo } from "./NetInfo";
import { styles, statusBarBackgroundColor } from "./styles";
import { IContainerProps } from "./types";
function ContainerComponent(props: IContainerProps) {
  const { children, style } = props;
  return (
    <SafeAreaView style={[styles.container, style]} {...props}>
      {netInfoState.hasAccess ? null : <NetInfo />}
      {children}
    </SafeAreaView>
  );
}

export const Container = observer(ContainerComponent);
