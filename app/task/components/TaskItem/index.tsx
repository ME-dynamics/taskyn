import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { material } from "react-native-typography";
import { View, Text, TextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Button, Caption, Paragraph, THEME, Touchable } from "../../../library";
import { styles } from "./style";
import { IInputProps, ITaskItemProps } from "./type";
import {
  EditButtonsComponent,
  UnDoneButtonsComponent,
} from "../ButtonsComponents";

export function TaskItem(props: ITaskItemProps) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { text, date } = props;
  const [value, setValue] = useState(text);
  const [edit, setEdit] = useState(false);
  const [done, setDone] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <View style={styles.textContainer}>
          {!edit ? (
            <Paragraph>{value}</Paragraph>
          ) : (
            <TextInput
              style={[material.body1, styles.paragraph]}
              onChangeText={setValue}
              value={value}
              multiline={true}
            />
          )}
        </View>
        <View style={styles.footer}>
          <View style={styles.dateContainer}>
            <Caption>{date}</Caption>
          </View>
          <View
            style={
              !done
                ? styles.buttonContainer
                : [styles.buttonContainer, styles.spaceBetween]
            }
          >
            {!done ? (
              edit ? (
                <EditButtonsComponent
                  text={text}
                  setValue={setValue}
                  setEdit={setEdit}
                  setDone={setDone}
                />
              ) : (
                <UnDoneButtonsComponent setEdit={setEdit} setDone={setDone} />
              )
            ) : (
              <FontAwesome5
                name="check-double"
                size={30}
                color={THEME.COLORS.PRIMARY.NORMAL}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
