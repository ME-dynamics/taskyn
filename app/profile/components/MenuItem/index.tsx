import React from "react";

import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Paragraph, Touchable } from "../../../library";
import { styles } from "./styles";
import { IMenuItemProps } from "./types";
export function MenuItem(props: IMenuItemProps) {
  const { title, onPress, Icon, line, style } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.collapsedContainer, styles.plainHeight]}>
        <View style={[styles.iconContainer, style]}>
          <Icon size={24} color={"black"} />
        </View>
        <View style={styles.title}>
          <Paragraph>{title}</Paragraph>
        </View>
        {/* <MaterialCommunityIcons name="chevron-left" color={"grey"} size={30} /> */}
      </View>
      {line ? <View style={styles.line}></View> : undefined}
      <Touchable onPress={onPress} rippleColor={"lightGrey"} />
    </View>
  );
}
