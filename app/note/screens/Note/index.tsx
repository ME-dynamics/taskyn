import React, { useRef, useMemo } from "react";
import { View } from "react-native";
import Gallery from "react-native-awesome-gallery";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { observer } from "mobx-react-lite";
import { Container, Scroller, Input } from "../../../library";
import { NoteImage, NoteHeader, DeleteSheet } from "../../components";

import { styles } from "./styles";
function NoteScreen() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["30%", "30%"], []);
  function onDeletePress() {
    bottomSheetRef.current?.present();
  }
  function onImagePress(id: string) {
    console.log(id, "open gallery here");
  }
  function onRemovePress(id: string) {
    console.log(id, "remove image from state");
  }
  return (
    <BottomSheetModalProvider>
      <Container>
        <NoteHeader onDeletePress={onDeletePress} />
        <Scroller keyboard>
          {/* header */}
          <View style={styles.titleInputContainer}>
            <Input
              mode={"raw"}
              title={"موضوع"}
              placeholder={"موضوع خود را وارد کنید"}
            />
            <View style={styles.horizontalLine} />
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
