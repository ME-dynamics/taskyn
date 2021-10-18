import React from "react";
import { View, Image, ScrollView } from "react-native";
import { PickerButton } from "../PickerButton";
import { observer } from "mobx-react-lite";
import { openCamera, openGallery, openCropper } from "../../../library";
import { NoteImage } from "../NoteImage";
import { Line } from "../Line";
import { note } from "../../entities";

import { styles } from "./styles";
function PickerComponent() {
  // move to usecases
  async function onCropPress(path: string) {
    try {
      const image = await openCropper("note", path);
      note.replaceImage(path, image.path);
    } catch (error) {
      console.log(error);
    }

    // set to state;
  }
  function onRemovePress(path: string) {
    note.removeImage(path);
  }
  async function onOpenCameraPressed() {
    try {
      const image = await openCamera("note");
      note.addImage(image.path);
    } catch (error) {
      console.log(error);
    }
  }
  async function onOpenGalleryPressed() {
    const images = await openGallery("note");
    if (Array.isArray(images)) {
      for (let index = 0; index < images.length; index++) {
        const image = images[index];
        note.addImage(image.path);
      }
      return;
    }
    note.addImage(images.path);
  }
  function renderImages() {
    const images = [];
    for (let index = 0; index < note.images.length; index++) {
      const image = note.images[index];
      images.push(
        <NoteImage
          uri={image}
          key={index}
          path={image}
          onCropPress={onCropPress}
          onRemovePress={onRemovePress}
        />
      );
    }
    return images;
  }
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        {note.hasImages ? (
          <View style={styles.scrollViewContainer}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollViewContent}
              horizontal={true}
            >
              {renderImages()}
            </ScrollView>
          </View>
        ) : null}

        <View
          style={[
            styles.picker,
            note.hasImages ? undefined : styles.noneImagePicker,
          ]}
        >
          <PickerButton
            mode={"gallery"}
            onPress={onOpenGalleryPressed}
            small={note.hasImages}
          />
          <Line direction={note.hasImages ? "horizontal" : "vertical"} />
          <PickerButton
            mode={"camera"}
            onPress={onOpenCameraPressed}
            small={note.hasImages}
          />
        </View>
      </View>
    </View>
  );
}

export const Picker = observer(PickerComponent);
