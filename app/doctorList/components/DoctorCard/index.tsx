import React, { useState } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { Button, Caption, THEME, Title } from "../../../library";
import { styles } from "./styles";
import { IDoctorsCardProps } from "./types";
import { AntDesign } from "@expo/vector-icons";

export const DoctorCard = observer((props: IDoctorsCardProps) => {
  const { image, name, description, onPress } = props;
  const [select, setSelect] = useState(false);
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
          <Button
            mode={"text"}
            color={select ? THEME.COLORS.GREY.NORMAL : ""}
            size={"small"}
            rippleColor={"grey"}
            onPress={() => {
              setSelect(true);
            }}
            Icon={({ color, size }) => {
              return (
                <AntDesign name={"checkcircleo"} color={color} size={size} />
              );
            }}
          >
            {select ? "در انتظار تایید" 
            : 
            "اتصال به دکتر"}
          </Button>
        </View>
      </View>
    </View>
  );
});
