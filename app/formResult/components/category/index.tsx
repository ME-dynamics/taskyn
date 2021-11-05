import React from "react";
import { View, Text } from "react-native";
import { Paragraph, Title, Touchable } from "../../../library";
import { styleGen } from "./styles";
// import { styles } from "./styles";
import { ICategoryProps } from "./type";

export function CategoryComponent(props: ICategoryProps) {
  const { mode, rippleColor, color, onPress, children } = props;

  const { styles } = styleGen({
    mode,
    color,
  });
  return (
      <View style={[styles.container]}>
        <Paragraph numberOfLines={1} style={styles.text}>
          {children}
        </Paragraph>
        <Touchable onPress={onPress} rippleColor={rippleColor} />
      </View>
  );
}
