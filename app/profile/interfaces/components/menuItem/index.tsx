import React from "react";

import { View, Text } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Button, Touchable } from "../../../../library";
import { styles } from "./style";
import { IMenuItemProps } from "./type";
export function MenuItem(props: IMenuItemProps) {
  const { title, onPress,Icon } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.collapsedContainer, styles.plainHeight]}>
        <Icon
        size={30}
        color={"grey"}
        />
     
        <Text style={styles.text}>{title}</Text>
        <MaterialCommunityIcons name="chevron-left" color={"grey"} size={30} />
      </View>
      <Touchable onPress={onPress} rippleColor={"lightGrey"} />
    </View>
  );
}
