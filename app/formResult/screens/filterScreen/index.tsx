import React from "react";
import { View, Text } from "react-native";
import { Paragraph, SelectButton } from "../../../library";
import { styles } from "./styles";
export function Filter() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.body}>
          <SelectButton mode={"checkbox"} size={24} selected={false}>
            <Paragraph>{"همه تست ها"}</Paragraph>
          </SelectButton>
        </View>
        <View style={styles.line} />
      </View>
      
    </View>
  );
}
