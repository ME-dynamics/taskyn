import React from "react";
import { View, Image, Alert } from "react-native";
import { MaterialCommunityIcons,FontAwesome5,Octicons ,Foundation} from "@expo/vector-icons";
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
  const renderTasks = (props: IIconProps) => {
    const { color, size } = props;
    return (
      <FontAwesome5
        name={"tasks"}
        size={size}
        color={color}
      />
    );
  };
  const renderChecklist = (props: IIconProps) => {
    const { color, size } = props;
    return (
      <Octicons
        name={"checklist"}
        size={size}
        color={color}
      />
    );
  };
  const renderClipboardNotes = (props: IIconProps) => {
    const { color, size } = props;
    return (
      <Foundation
        name={"clipboard-notes"}
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
            Icon={renderTasks}
            title="تمرین"
            onPress={() => Alert.alert("hi1")}
          />
          <MenuItem
            Icon={renderChecklist}
            title="فرم ها"
            onPress={() => Alert.alert("hi1")}
          />
          <MenuItem
            Icon={renderClipboardNotes}
            title="یادداشت"
            onPress={() => Alert.alert("hi1")}
          />
        </View>
      </Shadow>
    </View>
  );
};
