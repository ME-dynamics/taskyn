import React from "react";
import { View, Image, Alert } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Octicons,
  Foundation,
  MaterialIcons,
  AntDesign,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

import { MenuItem } from "../components";
import { styles } from "./style";
import { IIconProps } from "./type";

export const DoctorProfile = () => {
  const renderSupportAgent = (props: IIconProps) => {
    const { color, size } = props;
    return <MaterialIcons name={"support-agent"} size={size} color={color} />;
  };
  const renderInfocirlceo = (props: IIconProps) => {
    const { color, size } = props;
    return <AntDesign name={"infocirlceo"} size={size} color={color} />;
  };
  const renderQuestiOnCircleo = (props: IIconProps) => {
    const { color, size } = props;
    return <AntDesign name={"questioncircleo"} size={size} color={color} />;
  };
  const renderExitOutline = (props: IIconProps) => {
    const { color, size } = props;
    return <Ionicons name={"exit-outline"} size={size} color={color} />;
  };
  const renderClipboardNotes = (props: IIconProps) => {
    const { color, size } = props;
    return <Feather name="file-text" size={size} color={color} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBackground}></View>
      <View style={styles.botbackground}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />

        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <MenuItem
              Icon={renderSupportAgent}
              title="پشتیبانی"
              onPress={() => Alert.alert("hi1")}
            />
            <MenuItem
              Icon={renderInfocirlceo}
              title="درباره ما"
              onPress={() => Alert.alert("hi1")}
            />
            <MenuItem
              Icon={renderQuestiOnCircleo}
              title="سوالات متداول"
              onPress={() => Alert.alert("hi1")}
            />
            <MenuItem
              Icon={renderClipboardNotes}
              title="شرایط و قوانین"
              onPress={() => Alert.alert("hi1")}
            />
            <MenuItem
              Icon={renderExitOutline}
              title="خروج از حساب کاربری"
              onPress={() => Alert.alert("hi1")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
