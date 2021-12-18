import React, { useState, useRef } from "react";
import { View, TextInput } from "react-native";
import { observer } from "mobx-react-lite";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Caption, Button, TaskynIcon, Tap, THEME } from "../../../library";
import { taskDone, updateTask, removeTask } from "../../usecases";
import { styles, selectionColor } from "./styles";
import { ITaskItemProps } from "./type";

function TaskItemComponent(props: ITaskItemProps) {
  const { id, content, done, createdAt, onTaskInputBlur, onTaskInputFocus } =
    props;
  const [showMenu, setShowMenu] = useState(false);

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
          size={"extra-small"}
          rippleColor={"grey"}
          loading={edit ? updateLoading : doneLoading}
          onPress={onDone}
        >
          {edit ? "ثبت" : "اتمام"}
        </Button>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Tap
          onPress={() => {
            setShowMenu(!showMenu);
          }}
        >
          <TaskynIcon name={"menu"} size={24} color={THEME.COLORS.GREY.NORMAL} />
        </Tap>
        <Caption>{createdAt}</Caption>
      </View>
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
      <View style={styles.buttonContainer}>
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
          >
            {"انجام شد"}
          </Button>
        ) : (
          renderEdit()
        )}
      </View>
      {showMenu ? (
        <View style={styles.popUp}>
          <Button
            mode={"text"}
            rippleColor={"lightGrey"}
            size={"small"}
            Icon={() => {
              return (
                <TaskynIcon
                  name={"pencil"}
                  size={24}
                  color={THEME.COLORS.PRIMARY.NORMAL}
                />
              );
            }}
          >
            {"ویرایش"}
          </Button>
          <Button
            mode={"text"}
            rippleColor={"lightGrey"}
            size={"small"}
            Icon={() => {
              return (
                <TaskynIcon
                  name={"trash"}
                  size={24}
                  color={THEME.COLORS.PRIMARY.NORMAL}
                />
              );
            }}
          >
            {"حذف"}
          </Button>
        </View>
      ) : null}
    </View>
  );
}

export const TaskItem = observer(TaskItemComponent);
