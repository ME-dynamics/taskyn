import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { Button, logger, SuccessAlert } from "../../../library";

import { userInfoState } from "../../entities";
import { updateUserProfile } from "../../usecases";

function EditButtonComponent(props: {
  tintColor?: string;
  onCollapsePress: () => void;
  userId: string;
  onclosePress: () => void;
}) {
  const { tintColor, onCollapsePress, userId, onclosePress } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const save = "ذخیره";
  const edit = "ویرایش";

  async function onPress() {
    if (userInfoState.editable) {
      setLoading(true);
      const error = await updateUserProfile(userId); // TODO: handle error
      logger({
        container: "userInfo",
        path: { section: "components", file: "EditButtonComponent" },
        type: "error",
        logMessage: `error in updateUserProfile ${error}`,
      });
      setLoading(false);
      // onCollapsePress();

      if (error === undefined) {
        console.log("true");
        onCollapsePress();
      } else {
        return (
          <SuccessAlert
            buttonText={"متوحه شدم"}
            onPress={onclosePress}
            title={error}
          />
        );
      }

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
