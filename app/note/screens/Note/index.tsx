import React, { useRef, useMemo } from "react";
import { View } from "react-native";
import Gallery from "react-native-awesome-gallery";
import { useRoute } from "@react-navigation/native";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { observer } from "mobx-react-lite";

import { Container, Scroller, Input } from "../../../library";
import { NoteImage, NoteHeader, DeleteSheet } from "../../components";
import { noteListState } from "../../entities";
import { updateNote } from "../../usecases";

import { styles } from "./styles";

function NoteScreen() {
  const route = useRoute();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["30%", "30%"], []);
  async function onUpdateNote() {
    if (noteListState.currentNote) {
      await updateNote(noteListState.currentNote);
    }
  }
  function onDeletePress() {
    bottomSheetRef.current?.present();
  }
  function onImagePress(id: string) {
    console.log(id, "open gallery here");
  }
  function onRemovePress(id: string) {
    const imageIds =
      noteListState.currentNote?.imageIds.filter((imageId) => imageId !== id) ||
      [];
    noteListState.updateCurrentNoteImageIds(imageIds);
  }
  return (
    <BottomSheetModalProvider>
      <Container>
        <NoteHeader
          onUpdateNotePress={onUpdateNote}
          onDeletePress={onDeletePress}
        />
        <Scroller keyboard>
          {/* header */}
          <View style={styles.titleInputContainer}>
            <Input
              mode={"raw"}
              title={"موضوع"}
              placeholder={"موضوع خود را وارد کنید"}
              value={noteListState.currentNote?.title}
              editable={noteListState.currentNote?.edit}
              onChangeText={(text) => {
                noteListState.setCurrentNoteTitle(text);
              }}
            />
            <View style={styles.horizontalLine} />
          </View>
          <View style={styles.noteInputContainer}>
            <Input
              mode={"raw"}
              title={"متن"}
              placeholder={"موضوع خود را وارد کنید"}
              multiline
              value={noteListState.currentNote?.content}
              editable={noteListState.currentNote?.edit}
              onChangeText={(text) => {
                noteListState.setCurrentNoteContent(text);
              }}
            />
          </View>
          {noteListState.currentNote?.imageIds.map((item) => {
            return (
              <NoteImage
                key={item}
                id={item}
                onImagePress={onImagePress}
                onRemovePress={onRemovePress}
              />
            );
          })}
          {/* note images */}
        </Scroller>
        <BottomSheetModal
          backdropComponent={BottomSheetBackdrop}
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
        >
          <DeleteSheet />
        </BottomSheetModal>
      </Container>
    </BottomSheetModalProvider>
  );
}

export const Note = observer(NoteScreen);
