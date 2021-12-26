import React from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { unknownImage } from "../../assets";
import { Button, Caption, Paragraph } from "../../../library";
import { doctorsState } from "../../entities";
import { createRequest } from "../../usecases";

import { styles } from "./styles";
import { IDoctorCardProps } from "../../types";

function DoctorCardComponent(props: IDoctorCardProps) {
  const { id, fullName, profileImageUrl, description, mode } = props;
  async function onPress() {
    if (mode === "doctors") {
      await createRequest(id);
    }
  }
  function renderButtonText() {
    if (mode === "myDoctor") {
      if (doctorsState.requestConfirmed) {
        return "لغو اتصال";
      }
      return "در انتظار تایید";
    }
    return "درخواست اتصال";
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
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"extra-small"}
          fullRadius
          onPress={onPress}
        >
          {renderButtonText()}
        </Button>
      </View>
    </View>
  );
}

export const DoctorCard = observer(DoctorCardComponent);
