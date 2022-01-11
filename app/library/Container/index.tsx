import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { observer } from "mobx-react-lite";
import { NetInfo } from "./NetInfo";
import { styles } from "./styles";
import { IContainerProps } from "./types";

function ContainerComponent(props: IContainerProps) {
  const { children, style } = props;

  return (
    <SafeAreaView {...props} style={[styles.container, style]}>
      {children}
      <NetInfo />
    </SafeAreaView>
  );
}

export const Container = observer(ContainerComponent);
