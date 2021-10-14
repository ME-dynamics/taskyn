import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Button,
  THEME,
  Input,
  Title,
  Subheading,
  Touchable,
  Headline,
} from "../../library";
import { styles } from "./style";
export function NoteScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.cameraIcon}>
          <View style={styles.cameraButton}>
            <MaterialCommunityIcons
              name="camera-outline"
              color={THEME.COLORS.PRIMARY.DARK}
              size={70}
            />
            <View style={styles.cameraText}>
              <Subheading>{"دوربین"}</Subheading>
            </View>
            <Touchable rippleColor={"lightGrey"} />
          </View>
          <View style={styles.line} />
          <View style={styles.cameraButton}>
            <MaterialCommunityIcons
              name="camera-outline"
              color={THEME.COLORS.PRIMARY.DARK}
              size={70}
            />
            <View style={styles.cameraText}>
              <Subheading>{"گالری"}</Subheading>
            </View>
            <Touchable rippleColor={"lightGrey"} />
          </View>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.inputs}>
          <View>
            <Input mode={"flat"} title={"موضوع"} />
          </View>
          <View>
            <Input mode={"flat"} title={"تاریخ"} />
          </View>
          <ScrollView style={{ flex: 1 }}>
            <View>
              <Input mode={"flat"} title={"متن"} style={styles.note} />
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode={"contained"} size={"big"} rippleColor={"lightGrey"}>
          {"ثبت کردن"}
        </Button>
      </View>
    </View>
  );
}
