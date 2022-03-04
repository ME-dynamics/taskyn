import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { Button } from "../../../library";

import { userInfoState } from "../../entities";
import { updateUserProfile } from "../../usecases";

function EditButtonComponent(props: {
  tintColor?: string;
  onCollapsePress: () => void;
  userId: string;
}) {
  const { tintColor, onCollapsePress, userId } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const save = "ذخیره";
  const edit = "ویرایش";

  async function onPress() {
    if (userInfoState.editable) {
      setLoading(true);
      await updateUserProfile(userId); // TODO: handle error
      setLoading(false);
      onCollapsePress();
      userInfoState.setEditable(false);
      return;
    }
    userInfoState.setEditable(true);
  }
  return (
    <Button
      mode={"text"}
      size={"growWithText"}
      rippleColor={"lightGrey"}
      textColor={"white"}
      onPress={onPress}
      loading={loading}
    >
      {userInfoState.editable ? save : edit}
    </Button>
  );
}

export const EditButton = observer(EditButtonComponent);
