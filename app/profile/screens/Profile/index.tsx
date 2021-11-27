import React from "react";
import { View, Image, Alert } from "react-native";
import { openCamera, openCropper, openGallery, Tap } from "../../../library";
import { useNavigation, NavigationProp  } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import { MenuItem } from "../../components/MenuItem";
import { styles } from "./styles";
import { IIconProps } from "./types";
import { Headline } from "../../../library";
export const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
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
      <View style={styles.header}>
        <Tap onPress={() => {}}>
          <View style={styles.cameraIconContainer}>
            <Entypo name="camera" size={20} color="black" />
          </View>
        </Tap>

        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />
        <Headline style={styles.title}>{"سجاد سیف اله"}</Headline>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <MenuItem
              Icon={renderSupportAgent}
              title="پشتیبانی"
              onPress={() => navigation.push("Support")}
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
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
