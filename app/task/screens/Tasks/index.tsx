import React, { useRef, useEffect } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useRoute } from "@react-navigation/native";
import { getRole } from "../../../authentication";
import { Button, Container, Scroller, tScrollerRef } from "../../../library";
import { TaskItem } from "../../components/TaskItem";
import { taskState } from "../../entities";
import { retrieveTasks, addEmptyTask } from "../../usecases";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
function TasksScreen() {
  const scrollRef = useRef<tScrollerRef>(null);
  const route = useRoute();
  // @ts-expect-error
  const customerId = route.params?.id || "";
  function onNewTaskPress() {
    addEmptyTask();
    scrollRef.current?.scrollToEnd({ animated: true });
  }

  function renderTaskItems() {
    const components: JSX.Element[] = [];
    for (let index = 0; index < taskState.taskList.length; index++) {
      const { id, content, done, createdAt } = taskState.taskList[index];
      components.push(
        <TaskItem
          key={id}
          id={id}
          userId={customerId} 
          content={content}
          done={done}
          createdAt={createdAt}
        />
      );
    }
    return components;
  }
  useEffect(() => {
    retrieveTasks(customerId).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Container>
      <Scroller
        ref={scrollRef}
        contentContainerStyle={styles.containerContentStyle}
        keyboard
        enableOnAndroid
        extraHeight={256}
      >
        {renderTaskItems()}
      </Scroller>
      <View style={[styles.buttonContainer]}>
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"FAB"}
          Icon={() => {
            return <Entypo name="plus" size={24} color="white" />;
          }}
          fullRadius
          onPress={onNewTaskPress}
        >
          {"افزودن تمرین جدید"}
        </Button>
      </View>
    </Container>
  );
}

export const Tasks = observer(TasksScreen);
