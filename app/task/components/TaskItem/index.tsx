import React, { useState, useRef } from "react";
import { View, TextInput } from "react-native";
import { observer } from "mobx-react-lite";
import {
  Caption,
  Button,
  TaskynIcon,
  IconButton,
  Paragraph,
} from "../../../library";

import { taskState } from "../../entities";
import { taskDone, removeTask } from "../../usecases";
import { TaskMenu } from "../TaskMenu";

import { styles, menuColor } from "./styles";
import { ITaskItemProps } from "../../types";

function TaskItemComponent(props: ITaskItemProps) {
  const { id, userId, content, done, createdAt, showEditModal } = props;
  // const isEmpty = !createdAt;
  const [showMenu, setShowMenu] = useState(false);

  // const [edit, setEdit] = useState<boolean>(isEmpty);
  const [doneLoading, setDoneLoading] = useState<boolean>(false);
  // const [upsertTaskLoading, setUpsertTaskLoading] = useState<boolean>(false);
  const [tempContent, setTempContent] = useState(content);
  // const inputRef = useRef<TextInput>(null);
  function onEditPress() {
    setShowMenu(false);
    taskState.setCurrentEditTask(id);
    // show edit modal
    showEditModal();
  }
  async function onRemovePress() {
    await removeTask(id, userId || "");
  }
  async function onDone() {
    try {
      setDoneLoading(true);
      await taskDone(id);
      setDoneLoading(false);
    } catch (error) {}
  }
  // TODO: move update to edit modal
  // async function onUpdatePress() {
  //   setUpsertTaskLoading(true);
  //   await updateTask({ taskId: id, content: tempContent, userId });
  //   setUpsertTaskLoading(false);
  //   // setEdit(false);
  // }
  // TODO: remvove create task, empty task
  // async function onCreatePress() {
  //   setUpsertTaskLoading(true);
  //   const created = await createTask(tempContent, userId || "");
  //   if (created) {
  //     // setEdit(false);
  //     // TODO: handle error state here
  //   }
  //   setUpsertTaskLoading(false);
  // }

  function renderFooter() {
    // if (edit) {
    //   if (content) {
    //     return (
    //       <Button
    //         mode={"contained"}
    //         size={"big"}
    //         loading={upsertTaskLoading}
    //         rippleColor={"lightGrey"}
    //         onPress={onUpdatePress}
    //       >
    //         {"بروزرسانی تمرین"}
    //       </Button>
    //     );
    //   } else {
    //     return (
    //       <Button
    //         mode={"contained"}
    //         size={"big"}
    //         loading={upsertTaskLoading}
    //         rippleColor={"lightGrey"}
    //         onPress={onCreatePress}
    //       >
    //         {"اضافه کردن تمرین"}
    //       </Button>
    //     );
    //   }
    // }
    if (done) {
      return <Paragraph style={styles.doneParagraph}>{"انجام دادم"}</Paragraph>;
    }
    return (
      <View style={styles.makeDoneContainer}>
        <Button
          mode={"text"}
          size={"growWithText"}
          loading={doneLoading}
          rippleColor={"lightGrey"}
          onPress={onDone}
        >
          {"اتمام"}
        </Button>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          color={menuColor}
          onPress={() => {
            setShowMenu(true);
          }}
          Icon={({ size, color }) => {
            return <TaskynIcon name={"menu"} size={size} color={color} />;
          }}
        />
        <Caption>{createdAt}</Caption>
      </View>
      <View style={styles.textContainer}>
        <Paragraph
        // ref={inputRef}
        // style={styles.textInput}
        // onChangeText={setTempContent}
        // placeholder={"تمرین خود را وارد کنید ..."}
        // value={tempContent}
        // multiline={true}
        // selectionColor={selectionColor}
        // editable={edit}
        >
          {content}
        </Paragraph>
      </View>
      <View style={styles.footer}>{renderFooter()}</View>
      {showMenu ? (
        <TaskMenu
          show={showMenu}
          onHidePress={() => {
            setShowMenu(false);
          }}
          onEditPress={onEditPress}
          onRemovePress={onRemovePress}
        />
      ) : null}
    </View>
  );
}

export const TaskItem = observer(TaskItemComponent);
