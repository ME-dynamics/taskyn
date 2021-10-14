import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { heightPercentageToDP } from "react-native-responsive-screen";

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
    <KeyboardAwareScrollView  style={styles.container} >
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
        <View style={styles.inputContainer}>
          <Input mode={"flat"} title={"موضوع"} />
        </View>

        <View style={styles.inputContainer}>
          <Input mode={"flat"} title={"تاریخ"} />
        </View>
        <View style={styles.inputContainer}>
          <Input mode={"flat"} title={"متن"} multiline numberOfLines={5} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode={"contained"} size={"big"} rippleColor={"lightGrey"}>
          {"ثبت کردن"}
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
}
