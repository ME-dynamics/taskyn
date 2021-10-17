import React, { useState } from "react";
import { View, Text ,ScrollView} from "react-native";
import { Button, Input, Title, Paragraph } from "../../library";
import { styles } from "./style";
import { TaskItem } from "../components";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const Task = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title>{"بخش تمرینات"}</Title>
      </View>
      <View style={styles.inputContainer}>
        <Input
          mode={"flat"}
          title={"اضافه کردن تمرین : "}
          placeholder={"تمرین جدید را وارد کنید."}
        />
      </View>
      <View style={styles.taskContainer}>
      <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.containerContentStyle}> 

        {/* <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.containerContentStyle}> */}
        <TaskItem
          text={
            "دیگه نمردی خیلی جون سختی زیر ماشین سیانور اینارو تست کندیونه محترم سر ساعت 9 خودتو پرت کن پایین از پنجره اگه نمردی دوباره این کشس دیشسدی هشسخدی هخشسدی سش دسشهیدسشهیدشس یدشسیدسشیدشسنم دیشسمنیدشمسس شدسیدسشنیدشسن دیمشسد سسارو انجام بده"
          }
          
        />
         <TaskItem
          text={
            "دیگه نمردی خیلی جون سختی زیر ماشین سیانور اینارو تست کندیونه محترم سر ساعت 9 خودتو پرت کن پایین از پنجره اگه نمردی دوباره این کشس دیشسدی هشسخدی هخشسدی سش دسشهیدسشهیدشس یدشسیدسشیدشسنم دیشسمنیدشمسس شدسیدسشنیدشسن دیمشسد سسارو انجام بده"
          }
          
        />
         <TaskItem
          text={
            "دیگه نمردی خیلی جون سختی زیر ماشین سیانور اینارو تست کندیونه محترم سر ساعت 9 خودتو پرت کن پایین از پنجره اگه نمردی دوباره این کشس دیشسدی هشسخدی هخشسدی سش دسشهیدسشهیدشس یدشسیدسشیدشسنم دیشسمنیدشمسس شدسیدسشنیدشسن دیمشسد سسارو انجام بده"
          }
          
        />
         <TaskItem
          text={
            "دیگه نمردی خیلی جون سختی زیر ماشین سیانور اینارو تست کندیونه محترم سر ساعت 9 خودتو پرت کن پایین از پنجره اگه نمردی دوباره این کشس دیشسدی هشسخدی هخشسدی سش دسشهیدسشهیدشس یدشسیدسشیدشسنم دیشسمنیدشمسس شدسیدسشنیدشسن دیمشسد سسارو انجام بده"
          }
          
        />
              </KeyboardAwareScrollView>

    {/* </ScrollView> */}
      </View>
      <View style={styles.buttonContainer}>
        <Button mode={"contained"} size={"big"} rippleColor={"lightGrey"}>
          {"اضافه کردن تمرین"}
        </Button>
      </View>
      </View>
  );
};
