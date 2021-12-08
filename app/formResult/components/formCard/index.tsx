import React from "react";
import { View, Image } from "react-native";
import { IPatients } from "./types";
import { Touchable, Paragraph, Subheading, Caption } from "../../../library";
import { styles } from "./styles";

export const FormCard = (props: IPatients) => {
  const { Icon, title, answer, onPress, date } = props;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <Icon size={24} color={"#FCEC14"} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <Subheading
              style={{ textAlign: "right" }}
            >{`تست ${title}`}</Subheading>
          </View>
          <View style={styles.answerContainer}>
            <Paragraph
              style={{ textAlign: "right", color: "#727272" }}
            >{`نتیجه: ${answer}`}</Paragraph>
          </View>
        </View>

        <View style={styles.dateContainer}>
          <Caption>{date}</Caption>
        </View>
      </View>

      <Touchable onPress={onPress} rippleColor={"grey"} />
    </View>
  );
};
