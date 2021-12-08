import React from "react";
import { View, Text } from "react-native";
import { Headline, Subheading, Title } from "../../../library";
import { styles } from "./style";

export function Question() {
  return (
    <View style={styles.QuestionContainer}>
      <Title>
        {"فقط با افراد خاصی آن هم در شرایط خاصی می توانید زیاد صحبت کنید؟"}
      </Title>
    </View>
  );
}
