import React, { useState } from "react";
import { View } from "react-native";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { observer } from "mobx-react-lite";

import { styles } from "./styles";
import { Button, Input } from "../../../library";
import { IEditModalProps } from "../../types";
import { addEmptyTask, createTask } from "../../usecases";

function EditModalComponent(props: IEditModalProps) {
  const { onClosePress, customerId } = props; // TODO: on close press is right
  const [upsertTaskLoading, setUpsertTaskLoading] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false); // TODO: move to mobx - task state
  const [tempContent, setTempContent] = useState("");

  async function onCreatePress() {
    setUpsertTaskLoading(true);
    const created = await createTask(tempContent, customerId || "");
    if (created) {
      setEdit(false);
      // TODO: handle error state here
    }
    setUpsertTaskLoading(false);
    onClosePress();
  }
  return (
    <BottomSheetView style={styles.container}>
      <Input
        value={tempContent}
        title={""}
        mode={"raw"}
        placeholder={"موضوع تمرین را بنویسید ..."}
        multiline={true}
        onChangeText={(text) => setTempContent(text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          size={"small"}
          rippleColor={"lightGrey"}
          onPress={onClosePress}
        >
          {"لغو"}
        </Button>
        <Button
          mode={"contained"}
          size={"small"}
          rippleColor={"lightGrey"}
          onPress={onCreatePress}
          loading={upsertTaskLoading}
        >
          {"ذخیره"}
        </Button>
      </View>
    </BottomSheetView>
  );
}

export const EditModal = observer(EditModalComponent);
