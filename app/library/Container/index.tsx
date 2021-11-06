import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { observer } from "mobx-react-lite";
import { netInfoState } from "../netInfo";
import { NetInfo } from "./NetInfo";
import { styles } from "./styles";
import { IContainerProps } from "./types";
function ContainerComponent(props: IContainerProps) {
  const { children } = props;
  return (
    <SafeAreaView style={styles.container}>
      {netInfoState.hasAccess ? null : <NetInfo />}
      {children}
    </SafeAreaView>
  );
}

export const Container = observer(ContainerComponent);
