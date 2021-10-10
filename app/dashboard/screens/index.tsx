import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
export function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}></View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <View style={styles.button}></View>
          <View style={styles.button}></View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}></View>
          <View style={styles.button} />
        </View> 
      </View>
      <View style={styles.noteContainer}>
        <View style={styles.button}></View>
      </View>
    </View>
  );
}
