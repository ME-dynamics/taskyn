import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Button, Input, TaskynIcon } from "../../../library";
import { TaskItem } from "../../components/TaskItem";
import { taskState } from "../../entities";
import { retrieveTasks, createTask, onNewTaskChange } from "../../usecases";
import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
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
    for (let index = 0; index < taskState.taskList.length; index++) {
      const { id, content, done, createdAt } = taskState.taskList[index];
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
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.containerContentStyle}
        
      >
        {/* {focused ? null : (
        <View style={styles.inputContainer}>
          <Input
            mode={"flat"}
            value={taskState.newTask}
            onChangeText={onNewTaskChange}
            title={"اضافه کردن تمرین : "}
            placeholder={"تمرین جدید را وارد کنید."}
            // validation={taskState.taskValidation}
          />
        </View>
      )} */}
        <View style={styles.taskContainer}>{renderTaskItems()}</View>
        <View style={styles.line} />
        {/* {focused ? null : ( */}

        {/* )} */}
      </ScrollView>
      <View style={[styles.buttonContainer]}>
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"FAB"}
          Icon={() => {
            return <Entypo name="plus" size={24} color="white" />;
          }}
          fullRadius
          onPress={createTask}
        >
          {"افزودن تمرین جدید"}
        </Button>
      </View>
    </View>
  );
}

export const Tasks = observer(TasksScreen);
