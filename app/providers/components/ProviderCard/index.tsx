import React, { useState } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { Button, Caption, Paragraph, TaskynIcon } from "../../../library";
import { createRequest } from "../../usecases";

import { styles, iconColor } from "./styles";
import { IProviderCardProps } from "../../types";

function ProviderCardComponent(props: IProviderCardProps) {
  // @ts-expect-error
  const { id, fullName, profileImageUrl, description, myDoctor } = props;
  const [loading, setLoading] = useState<boolean>(false);
  async function onCreateRequest() {
    setLoading(true);
    await createRequest(id);
    setLoading(false);
  }
  function renderAvatar() {
    if (profileImageUrl) {
      return (
        <Image style={styles.profileImage} source={{ uri: profileImageUrl }} />
      );
    }
    return <TaskynIcon name={"profile"} color={iconColor} size={24} boxed />;
  }
  const requestText = "درخواست اتصال";
  const cancelRequestText = "لغو اتصال"
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.profileContainer}>{renderAvatar()}</View>
        <View style={styles.infoContainer}>
          <Paragraph>{fullName}</Paragraph>
          <Caption>{description}</Caption>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {
          <Button
            mode={"contained"}
            rippleColor={"lightGrey"}
            size={"extra-small"}
            fullRadius
            loading={loading}
            onPress={onCreateRequest}
          >
            {myDoctor ? cancelRequestText : requestText}
          </Button>
        }
      </View>
    </View>
  );
}

export const ProviderCard = observer(ProviderCardComponent);
