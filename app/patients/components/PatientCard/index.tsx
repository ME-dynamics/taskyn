import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { IPatientCardProps } from "./type";

export const PatientCard = (props: IPatientCardProps) => {
  const { image, name, description, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.row}>
        <Image source={{ uri: image }} style={styles.pic} />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt}>{name}</Text>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{status}</Text>
            </View>
          </View>
          <View style={styles.mblTxt1}>
            <Text numberOfLines={2} style={styles.mblTxt}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
