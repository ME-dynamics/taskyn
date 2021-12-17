import React from "react";
import { View, Text } from "react-native";
import {
  Caption,
  Paragraph,
  Subheading,
  THEME,
  Touchable,
} from "../../../library";
import { styles } from "./styles";
import { INoteProps } from "./types";
export function Card(props: INoteProps) {
  const { Icon, title, onPress, date, description } = props;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Icon size={24} color={"#FCEC14"} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.bodyContainer}>
            <View style={styles.titleContainer}>
              <Subheading>{title}</Subheading>
            </View>
            <View style={styles.descriptionContainer}>
              <Paragraph
                numberOfLines={1}
                style={{ color: THEME.COLORS.GREY.DARK }}
              >
                {description}
              </Paragraph>
            </View>
          </View>

          <View style={styles.dateContainer}>
            <Caption>{date}</Caption>
          </View>
        </View>

        <Touchable onPress={onPress} rippleColor={"grey"} />
      </View>
    </View>
  );
}
