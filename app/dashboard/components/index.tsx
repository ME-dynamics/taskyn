import React from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { Button, Caption, Title, Touchable } from "../../library";
import { styles } from "./style";
import { ICardProps } from "./type";

export const Card = observer((props: ICardProps) => {
  const { image, name, description, onPress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/image/images.png')} style={styles.patientImage} />
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

      {/* <Touchable onPress={onPress} rippleColor={"grey"} /> */}
    </View>
  );
});
