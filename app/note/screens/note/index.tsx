import React, { useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Input } from "../../../library";
import { Picker } from "../../components";
import { note } from "../../entities";
import { onTitleChange, onContentChange, createNote } from "../../usecases";
import { styles } from "./styles";
function NoteScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  async function onPress() {
    setLoading(true);
    await createNote("");
    setLoading(false);
  }
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Picker />
      <View style={styles.bodyContainer}>
        <View style={styles.inputContainer}>
          <Input
            mode={"flat"}
            title={"موضوع"}
            value={note.noteTitle}
            onChangeText={onTitleChange}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            mode={"flat"}
            title={"متن"}
            value={note.noteContent}
            onChangeText={onContentChange}
            multiline
            numberOfLines={8}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onPress}
          mode={"contained"}
          size={"big"}
          rippleColor={"lightGrey"}
          loading={loading}
        >
          {"ثبت کردن"}
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
}

export const Note = observer(NoteScreen);
