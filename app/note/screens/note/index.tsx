import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Input } from "../../../library";
import { PickerButton, Line, Picker } from "../../components";
import { styles } from "./styles";
export function NoteScreen() {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      {/* <View style={styles.pickerContainer}>
        <View style={styles.picker}>
          
        </View>
      </View> */}
      <Picker />
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
