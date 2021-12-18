import React, {useState,} from "react";
import { View, } from "react-native";
import {observer } from "mobx-react-lite"
import {
  Caption,
  Paragraph,
  Subheading,
  TaskynIcon,
  THEME,
  Touchable,
} from "../../../library";
import { styles } from "./styles";
import { INoteProps } from "./types";

function NoteCardComponent(props: INoteProps) {
  const {id, title, onPress, date, description } = props;
  function onNotePress() {
    onPress(id);
  }
  return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <TaskynIcon name={"notes"} size={24} color={THEME.COLORS.PRIMARY.NORMAL} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Subheading>{title}</Subheading>
            <Caption>{date}</Caption>
          </View>
          <View style={styles.descriptionContainer}>
            <Paragraph
              numberOfLines={1}
              style={{ color: THEME.COLORS.GREY.DARK }}
            >
              {description}
            </Paragraph>
          </View>
        </View>

        <Touchable onPress={onNotePress} rippleColor={"lightGrey"} />
      </View>
  );
}

export const NoteCard = observer(NoteCardComponent);