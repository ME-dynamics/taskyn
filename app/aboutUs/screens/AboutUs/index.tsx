import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TaskynIcon,
  IconButton,
  Logo,
  Paragraph,
  Scroller,
} from "../../../library";
import { aboutUsText } from "../../constant";
import { styles, buttonIconSize, iconColors } from "./styles";
import Communications from "react-native-communications";

export function AboutUs() {
  const { web, telegram, linkedin, instagram } = iconColors;
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo size={120} color={"primary"} />
      </View>
      <View style={styles.bodyContainer}>
        <Scroller>
          <Paragraph style={styles.body}>{aboutUsText}</Paragraph>
        </Scroller>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          color={web}
          Icon={({ size, color }) => {
            return (
              <MaterialCommunityIcons name={"web"} size={size} color={color} />
            );
          }}
          onPress={() => Communications.web("https://taskyn.ir")}
          size={buttonIconSize}
        />
        <IconButton
          color={telegram}
          Icon={({ size, color }) => {
            return <TaskynIcon name={"telegram"} size={size} color={color} />;
          }}
          onPress={() => Communications.web("https://telegram.com")}
          size={buttonIconSize}
        />
        <IconButton
          color={linkedin}
          Icon={({ size, color }) => {
            return <TaskynIcon name={"linkedin"} size={size} color={color} />;
          }}
          onPress={() => Communications.web("http://google.com")}
          size={buttonIconSize}
        />
        <IconButton
          color={instagram}
          Icon={({ size, color }) => {
            return (
              <TaskynIcon name={"instagram"} size={size} color={color} svg />
            );
          }}
          onPress={() => Communications.web("https://instagram.com/taskyn")}
          size={buttonIconSize}
        />
      </View>
    </View>
  );
}
