import React from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { Button, Caption, Title, Touchable } from "../../../library";
import { styles } from "./styles";
import { ICardProps } from "../../types";

function CardComponent(props: ICardProps) {
  const { imageUrl, name, description, onPress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.patientImage} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Title>{name}</Title>
        </View>
        <View style={styles.descriptionContainer}>
          <Caption>{description}</Caption>
        </View>
        <View style={styles.buttonContainer}>
          <View style={{ paddingHorizontal: 10 }}>
            <Button mode={"contained"} size={"medium"} rippleColor={"lightGrey"}>
              {"انتخاب دکتر"}
            </Button>
          </View>
        </View>
      </View>

    </View>
  );
};

export const Card = observer(CardComponent);