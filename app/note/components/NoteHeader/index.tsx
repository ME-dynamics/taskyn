import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { IconButton, Button, TaskynIcon } from "../../../library";
import { styles, iconButtonStyle } from "./styles";

function NoteHeaderComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <IconButton
          color={iconButtonStyle.color}
          size={iconButtonStyle.size}
          Icon={({ size, color }) => {
            return <TaskynIcon name={"back"} size={size} color={color} />;
          }}
          onPress={() => {
            console.log("go back");
          }}
        />
      </View>
      <View style={styles.iconButtonContainer}>
        <View style={styles.iconButtonWrapper}>
          <IconButton
            color={iconButtonStyle.color}
            size={iconButtonStyle.size}
            Icon={({ size, color }) => {
              return <TaskynIcon name={"trash"} size={size} color={color} />;
            }}
            onPress={() => {
              console.log("delete");
            }}
          />
        </View>
        <IconButton
          color={iconButtonStyle.color}
          size={iconButtonStyle.size}
          Icon={({ size, color }) => {
            return <TaskynIcon name={"paperclip"} size={size} color={color} />;
          }}
          onPress={() => {
            console.log("attach");
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button mode={"text"} rippleColor={"lightGrey"} size={"extra-small"}>
          {"ذخیره"}
        </Button>
      </View>
    </View>
  );
}

export const NoteHeader = observer(NoteHeaderComponent);
