import React, { useState, useRef } from "react";
import { View, TextInput } from "react-native";
import { observer } from "mobx-react-lite";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Caption, Button } from "../../../library";
import { taskDone, updateTask, removeTask } from "../../usecases";
import { styles, selectionColor } from "./styles";
import { ITaskItemProps } from "./type";

function TaskItemComponent(props: ITaskItemProps) {
  const { id, content, done, createdAt, onTaskInputBlur, onTaskInputFocus } =
    props;
  const [edit, setEdit] = useState<boolean>(false);
  const [doneLoading, setDoneLoading] = useState<boolean>(false);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const [removeLoading, setRemoveLoading] = useState<boolean>(false);
  const [tempContent, setTempContent] = useState(content); // FIXME: observable must change to plain js data structure using toJS()
  const inputRef = useRef<TextInput>(null);
  function onEditPress() {
    setEdit(true);
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }
  async function onClose() {
    if (edit) {
      setEdit(false);
      setTempContent(content);
      return;
    }
    setRemoveLoading(true);
    await removeTask(id);
  }
  async function onDone() {
    if (edit) {
      setUpdateLoading(true);
      await updateTask({ taskId: id, content: tempContent, userId: undefined });
      setUpdateLoading(false);
      setEdit(false);
      return;
    }
    try {
      setDoneLoading(true);
      await taskDone(id);
      setDoneLoading(false);
    } catch (error) {}
  }
  function renderEdit() {
    return (
      <>
        <Button
          mode={"text"}
          size={"small"}
          rippleColor={"grey"}
          loading={edit ? false : removeLoading}
          onPress={onClose}
          Icon={({ color, size }) => {
            return (
              <AntDesign name={"closesquareo"} color={color} size={size} />
            );
          }}
        >
          {edit ? "لغو" : "حذف"}
        </Button>
        {!edit ? (
          <Button
            mode={"text"}
            size={"small"}
            rippleColor={"grey"}
            onPress={onEditPress}
            Icon={({ color, size }) => {
              return <Feather name={"edit"} size={size} color={color} />;
            }}
          >
            {"ویرایش"}
          </Button>
        ) : null}
        <Button
          mode={"text"}
          size={"small"}
          rippleColor={"grey"}
          loading={edit ? updateLoading : doneLoading}
          onPress={onDone}
          Icon={({ color, size }) => {
            return (
              <AntDesign name={"checkcircleo"} color={color} size={size} />
            );
          }}
        >
          {edit ? "ثبت" : "اتمام"}
        </Button>
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
            <Button
              mode={"text"}
              size={"small"}
              rippleColor={"grey"}
              disabled
              Icon={({ color, size }) => {
                return (
                  <Ionicons name="checkmark-done" size={size} color={color} />
                );
              }}
              color={"black"}
            >
              {"انجام شد"}
            </Button>
          ) : (
            renderEdit()
          )}
        </View>
      </View>
    </View>
  );
}

export const TaskItem = observer(TaskItemComponent);
