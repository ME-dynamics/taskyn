import React from "react";
import { View, Image } from "react-native";
import { IPatients } from "./types";
import { Title, Touchable, Paragraph, Subheading } from "../../../library";
import { styles } from "./styles";

export const FormCard = (props: IPatients) => {
  const { Icon, englishName, persianName, onPress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <Icon size={24} color={"#FCEC14"} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.persianNameContainer}>
          <Subheading>{persianName}</Subheading>
        </View>
        <View style={styles.englishNameContainer}>
          <Paragraph style={{ textAlign: "right" }}>{englishName}</Paragraph>
        </View>
      </View>
      <Touchable onPress={onPress} rippleColor={"grey"} />
    </View>
  );
};
