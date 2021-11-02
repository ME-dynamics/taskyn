import React from "react";

import { View, Text } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Button, Paragraph, Touchable } from "../../../../library";
import { styles } from "./style";
import { IMenuItemProps } from "./type";
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
