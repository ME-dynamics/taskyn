//@ts-nocheck
import React from "react";
import { View, Image } from "react-native";
import { MenuItem } from "../components";
import { MaterialCommunityIcons,FontAwesome5   } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";
import { Alert } from "react-native";
import { styles } from "./style";

export const DoctorProfile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />

      <Shadow distance={10} viewStyle={styles.bodyShadow}>
        <View style={styles.body}>
          <MenuItem
            Icon={(color, size) => (
              <MaterialCommunityIcons
                name="account-circle"
                size={size}
                color={color}
              />
            )}
            title="مشخصات شخصی"
            onPress={() => Alert.alert("hi1")}
          />
           <MenuItem
            Icon={(color, size) => (
              <FontAwesome5
                name="tasks"
                size={size}
                color={color}
              />
            )}
            title="تمرین"
            onPress={() => Alert.alert("hi1")}
          />
           <MenuItem
            Icon={(color, size) => (
              <Octicons 
                name="checklist"
                size={size}
                color={color}
              />
            )}
            title="فرم ها"
            onPress={() => Alert.alert("hi1")}
          />
           <MenuItem
            Icon={(color, size) => (
              <MaterialCommunityIcons
                name="clipboard-notes"
                size={size}
                color={color}
              />
            )}
            title="یادداشت"
            onPress={() => Alert.alert("hi1")}
          />
        </View>
      </Shadow>
    </View>
  );
};
