import React, { useState, useRef } from "react";
import { View, Text, TextInput } from "react-native";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { Caption, Paragraph } from "../../../library";
import { styles, selectionColor } from "./styles";
import { ITaskItemProps } from "./type";
import { IconButton } from "../IconButton";

function TaskItemComponent(props: ITaskItemProps) {
  const { id, content, done, createdAt, onTaskInputBlur, onTaskInputFocus } =
    props;
  const [edit, setEdit] = useState<boolean>(false);

  const [tempContent, setTempContent] = useState(content); // FIXME: observable must change to plain js data structure using toJS()
  const inputRef = useRef<TextInput>(null);
  function onEditPress() {
    setEdit(true);
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }
  function onClose() {
    if (edit) {
      setEdit(false);
      setTempContent(content);
      return;
    }
    // TODO: delete item
    console.log(`task: ${id} deleted`);
  }
  function onDone() {
    if (edit) {
      // TODO: update task
      return;
    }
    // TODO: task done
  }
  function renderEdit() {
    return (
      <>
        <IconButton
          onPress={onClose}
          Icon={({ color, size }) => {
            return (
              <AntDesign name={"closesquareo"} color={color} size={size} />
            );
          }}
        />
        {!edit ? (
          <IconButton
            onPress={onEditPress}
            Icon={({ color, size }) => {
              return <Feather name={"edit"} size={size} color={color} />;
            }}
          />
        ) : null}
        <IconButton
          onPress={() => {}}
          Icon={({ color, size }) => {
            return (
              <AntDesign name={"checkcircleo"} color={color} size={size} />
            );
          }}
        />
      </>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput
          onFocus={onTaskInputFocus}
          onBlur={onTaskInputBlur}
          ref={inputRef}
          style={styles.textInput}
          onChangeText={setTempContent}
          value={tempContent}
          multiline={true}
          selectionColor={selectionColor}
          editable={edit}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.dateContainer}>
          <Caption>{createdAt}</Caption>
        </View>
        <View
          style={[
            styles.buttonContainer,
            edit ? styles.buttonContainerEdit : undefined,
            done ? styles.buttonContainerDone : undefined,
          ]}
        >
          {done ? (
            <FontAwesome5 name="check-double" size={30} color={"red"} />
          ) : (
            renderEdit()
          )}
        </View>
      </View>
    </View>
  );
}

export const TaskItem = observer(TaskItemComponent);
