import React from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { Button, Caption, Subheading } from "../../../library";
import { styles } from "./styles";
import { ICardProps } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

function UserCardComponent(props: ICardProps) {
  const { name, description, role, imageUrl, id } = props;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  // TODO: support image avatar
  // TODO: support select doctor state
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Subheading style={styles.textAlignRight}>{name}</Subheading>
          {<Caption>{description}</Caption>}
        </View>
        {role === "customer" && !id ? (
          <View style={styles.buttonContainer}>
            <Button
              mode={"contained"}
              size={"extra-small"}
              rippleColor={"lightGrey"}
              onPress={() => {
                navigation.push("providers");
              }}
            >
              {"انتخاب دکتر"}
            </Button>
          </View>
        ) : null}
      </View>
    </View>
  );
}

export const UserCard = observer(UserCardComponent);
