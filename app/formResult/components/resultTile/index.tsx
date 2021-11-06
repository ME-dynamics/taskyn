import React from "react";
import { View, Text } from "react-native";
import { Caption, Paragraph, Subheading } from "../../../library";
import { styles } from "./styles";
import { IResultTileProps } from "./type";

export function ResultTile(props: IResultTileProps) {
  const { color, title, createdAt, result } = props;
  return (
    <View style={styles.tile}>
      <View style={styles.body}>
        <View style={[styles.coloredline, { backgroundColor: color }]} />
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <Subheading>{`فرم ${title}`}</Subheading>
            <Caption>{createdAt}</Caption>
          </View>
          <View style={styles.answerContainer}>
            <Paragraph>{"جواب تست :"}</Paragraph>
            <Paragraph>{result}</Paragraph>
          </View>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
}
