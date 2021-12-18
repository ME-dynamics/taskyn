import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import {
  Button,
  Input,
  TaskynIcon,
  Container,
  Scroller,
  IconButton,
} from "../../../library";
import { CreateNoteImage, AttachMenu, AttachCounter } from "../../components";
import { noteState } from "../../entities";
import { onCropPress, onRemovePress } from "../../usecases";

import { styles } from "./styles";
import { tScrollRef } from "../../types";
import { autorun } from "mobx";

function CreateNoteScreen() {
  const scrollRef = useRef<tScrollRef>(null);
  function onNoteImageCropPress(path: string) {
    onCropPress(path);
  }
  function onNoteImageRemovePress(path: string) {
    onRemovePress(path);
  }
  function onAttachMenuPress() {
    noteState.toggleMenu(undefined);
  }
  function renderNoteImages() {
    const notes: JSX.Element[] = [];
    for (let index = 0; index < noteState.images.length; index++) {
      const { id, path } = noteState.images[index];
      notes.push(
        <CreateNoteImage
          key={path}
          imageId={id}
          path={path}
          onCropPress={onNoteImageCropPress}
          onRemovePress={onNoteImageRemovePress}
        />
      );
    }
    return notes;
  }
  useEffect(() => {
    autorun(() => {
      if (noteState.prevImagesCount < noteState.images.length) {
        scrollRef.current?.scrollToEnd({ animated: true });
      }
    });
  }, []);
  return (
    <Container>
      <View style={styles.titleInputContainer}>
        <Input
          mode={"raw"}
          title={"موضوع"}
          placeholder={"موضوع یادداشت خود را وارد کنید"}
        />
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.noteInputContainer}>
        <Input
          mode={"raw"}
          title={"متن یادداشت"}
          placeholder={"متن یادداشت خود را وارد کنید"}
        />
      </View>
      <View style={styles.pickImageContainer}>
        <View style={styles.imageListContainer}>
          <Scroller ref={scrollRef} horizontal rtl>
            {renderNoteImages()}
          </Scroller>
        </View>
        <View style={styles.attachButtonContainer}>
          <IconButton
            size={24}
            color={"black"}
            Icon={({ size, color }) => {
              return (
                <TaskynIcon name={"paperclip"} size={size} color={color} />
              );
            }}
            onPress={onAttachMenuPress}
          />
          <AttachCounter />

          <AttachMenu />
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.submitButtonContainer}>
        <Button
          mode={"contained"}
          size={"wide"}
          rippleColor={"lightGrey"}
          onPress={() => {}}
        >
          {"ثبت کردن یادداشت"}
        </Button>
      </View>
    </Container>
  );
}

export const CreateNote = observer(CreateNoteScreen);
