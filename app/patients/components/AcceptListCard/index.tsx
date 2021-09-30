import React from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { Button, Caption, Title, Touchable } from "../../../library";
import { styles } from "./style";
import { IPatientCardProps } from "./type";

export const AcceptListCard = observer((props: IPatientCardProps) => {
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
        <View style={styles.buttonContainer}>
          <View style={{paddingHorizontal:10,}}>
            <Button mode={"outlined"} size={"small"} rippleColor={"lightGrey"}>
              {"حذف"}
            </Button>
          </View>
          <View>
            <Button mode={"contained"} size={"small"} rippleColor={"lightGrey"}>
              {"قبول"}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
});
