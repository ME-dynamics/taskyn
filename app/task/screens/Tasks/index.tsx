import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { observer } from "mobx-react-lite";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Input } from "../../../library";
import { TaskItem } from "../../components/TaskItem";
import { taskState } from "../../entities";
import { retrieveTasks, createTask, onNewTaskChange } from "../../usecases";
import { styles } from "./styles";
function TasksScreen() {
  const [focused, setFocus] = useState<boolean>(false);
  function onTaskInputFocus() {
    setFocus(true);
  }
  function onTaskInputBlur() {
    setFocus(false);
  }
  function renderTaskItems() {
    const components = [];
    for (let index = 0; index < taskState.doneList.length; index++) {
      const { id, content, done, createdAt } = taskState.doneList[index];
      components.push(
        <TaskItem
          key={id}
          id={id}
          content={content}
          done={done}
          createdAt={createdAt}
          onTaskInputBlur={onTaskInputBlur}
          onTaskInputFocus={onTaskInputFocus}
        />
      );
    }
    for (let index = 0; index < taskState.undoneList.length; index++) {
      const { id, content, done, createdAt } = taskState.undoneList[index];
      components.push(
        <TaskItem
          key={id}
          id={id}
          content={content}
          done={done}
          createdAt={createdAt}
          onTaskInputBlur={onTaskInputBlur}
          onTaskInputFocus={onTaskInputFocus}
        />
      );
    }
    return components;
  }
  useEffect(() => {
    retrieveTasks().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <View style={styles.container}>
      {focused ? null : (
        <View style={styles.inputContainer}>
          <Input
            mode={"flat"}
            value={taskState.newTask}
            onChangeText={onNewTaskChange}
            title={"اضافه کردن تمرین : "}
            placeholder={"تمرین جدید را وارد کنید."}
          />
        </View>
      )}
      <View style={styles.taskContainer}>
        <KeyboardAwareScrollView
          style={styles.container}
          contentContainerStyle={styles.containerContentStyle}
        >
          {renderTaskItems()}
        </KeyboardAwareScrollView>
      </View>

      {focused ? null : (
        <View style={[styles.buttonContainer]}>
          <Button
            mode={"contained"}
            size={"big"}
            rippleColor={"lightGrey"}
            onPress={createTask}
          >
            {"اضافه کردن تمرین"}
          </Button>
        </View>
      )}
    </View>
  );
}

export const Tasks = observer(TasksScreen);
