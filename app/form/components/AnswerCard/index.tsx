import React, { useState } from "react";
import { View, Text } from "react-native";
import { Paragraph, SelectButton, Tap } from "../../../library";
import { styles } from "./style";
export function AnswerCard() {
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.answerContainer}>
      <View>
        <SelectButton
          size={20}
          mode={"radio"}
          selected={check}
          onPress={() => {
            setCheck(!check);
          }}
        >
          <Paragraph style={{ color: "#727272" }}>
            {"فقط با افراد خاص میتونانم حرف بزنم"}
          </Paragraph>
        </SelectButton>
      </View>
    </View>
  );
}
