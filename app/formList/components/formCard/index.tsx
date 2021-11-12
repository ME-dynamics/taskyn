import React from "react";
import { View, Image } from "react-native";
import { IPatients } from "./types";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import {
  Caption,
  Title,
  Touchable,
  Headline,
  Paragraph,
  Subheading,
} from "../../../library";
import { styles } from "./styles";

export const FormCard = (props: IPatients) => {
  const { id, Icon, englishName, persianName, onPress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
         <Icon size={40} color={"grey"} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.persianNameContainer}>
          <Title>{persianName}</Title>
        </View>
        <View style={styles.englishNameContainer}>
          <Paragraph style={{ textAlign: "right" }}>{englishName}</Paragraph>
        </View>
      </View>
      <Touchable onPress={onPress} rippleColor={"grey"} />
    </View>
  );
};
