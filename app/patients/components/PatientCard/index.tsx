import React from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { Caption, Title, Touchable } from "../../../library";
import { styles } from "./styles";
import { IPatientCardProps } from "./type";

export const PatientCard = observer((props: IPatientCardProps) => {
  const { image, name, description, onPress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.patientImage} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Title>{name}</Title>
        </View>
        <View style={styles.descriptionContainer}>
          <Caption>{description}</Caption>
        </View>
      </View>
      <Touchable onPress={onPress} rippleColor={"grey"} />
    </View>
  );
});
