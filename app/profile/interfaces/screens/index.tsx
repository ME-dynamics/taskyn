import React from "react";
import { View, Image, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";


import { MenuItem } from "../components/MenuItem";
import { styles } from "./style";
import { IIconProps } from "./type"

export const Profile = () => {
  const renderAccountCircle = (props: IIconProps) => {
    const { color, size } = props;
    return (
      <MaterialCommunityIcons
        name={"account-circle"}
        size={size}
        color={color}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />

      <Shadow distance={10} viewStyle={styles.bodyShadow}>
        <View style={styles.body}>
          <MenuItem
            Icon={renderAccountCircle}
            title="مشخصات شخصی"
            onPress={() => Alert.alert("hi1")}
          />
          <MenuItem
            Icon={renderAccountCircle}
            title="تمرین"
            onPress={() => Alert.alert("hi1")}
          />
          <MenuItem
            Icon={renderAccountCircle}
            title="فرم ها"
            onPress={() => Alert.alert("hi1")}
          />
          <MenuItem
            Icon={renderAccountCircle}
            title="یادداشت"
            onPress={() => Alert.alert("hi1")}
          />
        </View>
      </Shadow>
    </View>
  );
};
