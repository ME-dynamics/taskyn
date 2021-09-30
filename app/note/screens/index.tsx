import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { Button, colors, Input, Title, Touchable } from "../../library";
import { styles } from "./style";
export function NoteScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <MaterialCommunityIcons
          name="camera-outline"
          color={colors.darkPurple}
          size={150}
        />
        <View style={styles.cameraText}>
          <Title>{"عکس بگیرید"}</Title>
        </View>
        <Touchable rippleColor={"lightGrey"} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={{ flex: 1 }}>
          <Input mode={"flat"} title={"موضوع"} />
        </View>
        <View style={{ flex: 1 }}>
          <Input mode={"flat"} title={"تاریخ"} />
        </View>
        <View style={styles.noteStyle}>
          <Input mode={"flat"} title={"متن"} multiline={true} />
        </View>
        <View style={styles.buttonContainer}>
          <Button mode={"contained"} size={"big"} rippleColor={"lightGrey"}>
            {"ثبت کردن"}
          </Button>
        </View>
      </View>
    </View>
  );
}
