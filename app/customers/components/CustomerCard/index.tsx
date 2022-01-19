import React, { useCallback, useState } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import {
  Button,
  Caption,
  Paragraph,
  Touchable,
  TaskynIcon,
} from "../../../library";

import { styles, iconColor } from "./styles";
import { ICustomerCardProps } from "../../types";

function CustomerCardComponent(props: ICustomerCardProps) {
  const { id, fullName, profileImageUrl, description, onPress } = props;
  const [loading, setLoading] = useState<boolean>(false);

  async function onRemoveCustomer() {
    // TODO: remove customer
  }
  const onCustomerPress = useCallback(
    function onCustomer() {
      // TODO: navigation to dashboard screen
      onPress(id);
    },
    [id]
  );
  function renderAvatar() {
    if (profileImageUrl) {
      return (
        <Image style={styles.profileImage} source={{ uri: profileImageUrl }} />
      );
    }
    return <TaskynIcon name={"profile"} color={iconColor} size={24} boxed />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.profileContainer}>{renderAvatar()}</View>
        <View style={styles.infoContainer}>
          <Paragraph>{fullName}</Paragraph>
          <Caption>{description}</Caption>
        </View>
        <Touchable onPress={onCustomerPress} rippleColor={"lightGrey"} />
      </View>
      <View style={styles.buttonContainer}>
        {" "}
        <Button
          mode={"contained-grey"}
          rippleColor={"lightGrey"}
          size={"extra-small"}
          fullRadius
          loading={loading}
          onPress={onRemoveCustomer}
        >
          {"لغو اتصال"}
        </Button>
      </View>
    </View>
  );
}

export const CustomerCard = observer(CustomerCardComponent);
