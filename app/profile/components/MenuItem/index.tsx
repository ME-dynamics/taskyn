import React from "react";

import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Paragraph, Touchable } from "../../../library";
import { styles } from "./styles";
import { IMenuItemProps } from "./types";
export function MenuItem(props: IMenuItemProps) {
  const { title, onPress, Icon } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.collapsedContainer, styles.plainHeight]}>
        <Icon size={24} color={"black"} />
        <View style={styles.title}>
          <Paragraph>{title}</Paragraph>
        </View>
        <MaterialCommunityIcons name="chevron-left" color={"grey"} size={30} />
      </View>
      <View style={styles.line}></View>
      <Touchable onPress={onPress} rippleColor={"lightGrey"} />
    </View>
  );
}
