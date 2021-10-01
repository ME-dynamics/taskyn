import React from "react";
import { View, Text } from "react-native";
import { Paragraph, Tap } from "../../../library";
import { styles } from "./style";
export function AnswerCard() {
  return (
    <Tap
      onPress={() => {
        console.log("fuck");
      }}
    >
      <View style={styles.answerContainer}>
        <View style={styles.answerCard}>
          <View style={styles.textContainer}>
            <Paragraph>{"علاقه ای به همکاری با مردم ندارم"}</Paragraph>
          </View>
        </View>
      </View>
    </Tap>
  );
}
