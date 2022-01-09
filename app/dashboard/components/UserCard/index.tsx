import React from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { Button, Caption, Subheading, TaskynIcon } from "../../../library";
import { UnknownImage } from "../../assets";
import { styles, iconColor } from "./styles";
import { ICardProps } from "../../types";

function UserCardComponent(props: ICardProps) {
  const { name, description, onPress, role } = props;
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TaskynIcon name={"profile"} size={24} color={iconColor} boxed boxSize={52} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Subheading>{name}</Subheading>
          {/* <Caption>{description}</Caption> */}
        </View>
        <View style={styles.buttonContainer}>
          {role !== "provider" ? (
            <Button
              mode={"contained"}
              size={"extra-small"}
              rippleColor={"lightGrey"}
              onPress={onPress}
            >
              {"انتخاب دکتر"}
            </Button>
          ) : null}
        </View>
      </View>
    </View>
  );
}

export const UserCard = observer(UserCardComponent);
