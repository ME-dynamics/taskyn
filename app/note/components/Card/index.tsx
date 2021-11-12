import React from "react";
import { View, Text } from "react-native";
import { Caption, Paragraph, Subheading } from "../../../library";
import { styles } from "./styles";
import { ICardComponentProps } from "./types";

export function CardComponent(props: ICardComponentProps) {
  const {title, createdAt, body } = props;
  return (
    <View style={styles.tile}>
      {/* <View style={styles.body}> */}
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <Subheading>{title}</Subheading>
            <Caption>{createdAt}</Caption>
          </View>
          <View style={styles.answerContainer}>
            <Paragraph style={{width: "100%"}} numberOfLines={1}>{body}</Paragraph>
          </View>
        </View>
      {/* </View> */}
      <View style={styles.line} />
    </View>
  );
}
