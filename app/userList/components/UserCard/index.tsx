import React, { useState } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { unknownImage } from "../../assets";
import { Button, Caption, Paragraph, Touchable } from "../../../library";
import { providersState } from "../../entities";
import { createRequest, rejectRequest, confirmRequest } from "../../usecases";

import { styleGen } from "./styles";
import { IUserCardProps } from "../../types";

function UserComponent(props: IUserCardProps) {
  const { id, fullName, profileImageUrl, description, mode } = props;
  const [firstButtonLoading, setFirstButtonLoading] = useState<boolean>(false);
  const [secondButtonLoading, setSecondButtonLoading] =
    useState<boolean>(false);
  const { styles } = styleGen(mode);
  async function onCreateRequest() {
    setFirstButtonLoading(true);
    await createRequest(id);
    setFirstButtonLoading(false);
  }
  async function onRejectRequest() {
    setFirstButtonLoading(true);
    await rejectRequest(id);
    setFirstButtonLoading(false);
  }
  async function onConfirmRequest() {
    setSecondButtonLoading(true);
    await confirmRequest(id);
    setSecondButtonLoading(false);
  }
  async function onRemoveRequest() {
    setFirstButtonLoading(true);
    await rejectRequest(id);
    setFirstButtonLoading(false);
  }
  async function onRemoveProvider() {
    // TODO: implement remove provider
    console.log("not implemented");
  }
  async function onRemoveCustomer() {}
  function renderButton() {
    if (mode === "customerRequest") {
      return (
        <>
          <Button
            mode={"text"}
            rippleColor={"lightGrey"}
            size={"extra-small"}
            fullRadius
            loading={firstButtonLoading}
            onPress={onRejectRequest}
          >
            {"رد کردن"}
          </Button>
          <Button
            mode={"contained"}
            rippleColor={"lightGrey"}
            size={"extra-small"}
            fullRadius
            loading={secondButtonLoading}
            onPress={onConfirmRequest}
          >
            {"قبول کردن"}
          </Button>
        </>
      );
    }
    if (mode === "customers") {
      return (
        <Button
          mode={"contained-grey"}
          rippleColor={"lightGrey"}
          size={"extra-small"}
          fullRadius
          loading={firstButtonLoading}
          onPress={onRemoveCustomer}
        >
          {"لغو اتصال"}
        </Button>
      );
    }
    if (mode === "providers") {
      return (
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"extra-small"}
          fullRadius
          loading={firstButtonLoading}
          onPress={onCreateRequest}
        >
          {"درخواست اتصال"}
        </Button>
      );
    }
    if (mode === "myProvider") {
      const cancelConnection = "لغو اتصال";
      const cancelRequest = "لغو درخواست";
      return (
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"extra-small"}
          fullRadius
          loading={firstButtonLoading}
          onPress={
            providersState.requestConfirmed ? onRemoveProvider : undefined
          }
        >
          {providersState.requestConfirmed ? cancelConnection : cancelRequest}
        </Button>
      );
    }
  }

  if (!id) {
    return (
      <View style={[styles.container, styles.emptyContainer]}>
        <Paragraph>{"دکتری برای شما پیدا نشد"}</Paragraph>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: profileImageUrl }}
            defaultSource={unknownImage}
          />
        </View>
        <View style={styles.infoContainer}>
          <Paragraph>{fullName}</Paragraph>
          <Caption>{description}</Caption>
        </View>
        {mode === "customers" ? <Touchable rippleColor={"lightGrey"} /> : null}
      </View>
      <View style={styles.buttonContainer}>{renderButton()}</View>
    </View>
  );
}

export const UserCard = observer(UserComponent);
