import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
export function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}></View>
      <View style={styles.buttonContainer}>
        <View style={styles.firstButtonRow}>
          <View style={styles.historyButton}></View>
          <View style={styles.formButton}></View>
        </View>
        <View style={styles.secondButtonRow}>
          <View style={styles.patientFileButton}></View>
          <View style={styles.taskButton}></View>
        </View>
      </View>
      <View style={styles.noteContainer}>
        <View style={styles.noteButton}></View>
      </View>
    </View>
  );
}
