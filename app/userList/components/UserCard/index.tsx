import React from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { unknownImage } from "../../assets";
import { Button, Caption, Paragraph } from "../../../library";
import { providersState } from "../../entities";
import { createRequest } from "../../usecases";

import { styleGen } from "./styles";
import { IUserCardProps } from "../../types";

function UserComponent(props: IUserCardProps) {
  const { id, fullName, profileImageUrl, description, mode } = props;
  const { styles } = styleGen(mode);
  async function onPress() {
    if (mode === "providers") {
      await createRequest(id);
    }
  }
  function renderButton() {
    if (mode === "customerRequest") {
      return (
        <>
          <Button
            mode={"text"}
            rippleColor={"lightGrey"}
            size={"extra-small"}
            fullRadius
            onPress={onPress}
          >
            {"رد کردن"}
          </Button>
          <Button
            mode={"contained"}
            rippleColor={"lightGrey"}
            size={"extra-small"}
            fullRadius
            onPress={onPress}
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
          onPress={onPress}
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
          onPress={onPress}
        >
          {"درخواست اتصال"}
        </Button>
      );
    }
    if (mode === "myProvider") {
      const cancelConnection = "لغو اتصال";
      const waitingForConfirmation = "در انتظار تایید";
      return (
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"extra-small"}
          fullRadius
          onPress={onPress}
        >
          {providersState.requestConfirmed
            ? cancelConnection
            : waitingForConfirmation}
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
      </View>
      <View style={styles.buttonContainer}>{renderButton()}</View>
    </View>
  );
}

export const UserCard = observer(UserComponent);
