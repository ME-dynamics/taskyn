import React from "react";
import { View } from "react-native";
import Gallery from "react-native-awesome-gallery";
import { observer } from "mobx-react-lite";
import { Container, Scroller, Input } from "../../../library";
import { NoteImage, NoteHeader } from "../../components";

import { styles } from "./styles";
function NoteScreen() {
  function onImagePress(id: string) {
    console.log(id, "open gallery here");
  }
  function onRemovePress(id: string) {
    console.log(id, "remove image from state");
  }
  return (
    <Container>
      <NoteHeader />
      <Scroller keyboard>
        {/* header */}
        <View style={styles.titleInputContainer}>
          <Input
            mode={"raw"}
            title={"موضوع"}
            placeholder={"موضوع خود را وارد کنید"}
          />
        </View>
        <View style={styles.noteInputContainer}>
          <Input
            mode={"raw"}
            title={"متن"}
            placeholder={"موضوع خود را وارد کنید"}
            multiline
          />
        </View>
        <NoteImage
          id={"sdsad"}
          onImagePress={onImagePress}
          onRemovePress={onRemovePress}
        />
        <NoteImage
          id={"sdssdad"}
          onImagePress={onImagePress}
          onRemovePress={onRemovePress}
        />
        <NoteImage
          id={"sdsdsad"}
          onImagePress={onImagePress}
          onRemovePress={onRemovePress}
        />
        {/* note images */}
      </Scroller>
      {/* bottom sheet delete note */}
    </Container>
  );
}

export const Note = observer(NoteScreen);
