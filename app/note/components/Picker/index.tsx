import React from "react";
import { View, ScrollView } from "react-native";
import { PickerButton } from "../PickerButton";
import { observer } from "mobx-react-lite";
import { NoteImage } from "../NoteImage";
import { Line } from "../Line";
import { note } from "../../entities";
import {
  onCameraPress,
  onCropPress,
  onRemovePress,
  onGalleryPress,
} from "../../usecases";
import { styles } from "./styles";
function PickerComponent() {
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
            onPress={onGalleryPress}
            small={note.hasImages}
          />
          <Line direction={note.hasImages ? "horizontal" : "vertical"} />
          <PickerButton
            mode={"camera"}
            onPress={onCameraPress}
            small={note.hasImages}
          />
        </View>
      </View>
    </View>
  );
}

export const Picker = observer(PickerComponent);
