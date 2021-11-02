import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, ScrollView, Keyboard } from "react-native";
import { Button, Input, Title, Paragraph } from "../../library";
import { styles } from "./style";
import { TaskItem } from "../components/TaskItem";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/core";

export const Task = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "فرم نيو",
      headerRight: () => <Title>{"بخش تمرینات"}</Title>,
    });
  }, [navigation]);
  const [value, setValue] = useState("");
  const [keyboard, setKeyboard] = useState<boolean>(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboard(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboard(false);
    });
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);
  return (
    <View style={styles.container}>
      {/* <View style={styles.titleContainer}></View> */}
      <View style={styles.inputContainer}>
        <Input
          mode={"flat"}
          value={value}
          onChangeText={setValue}
          title={"اضافه کردن تمرین : "}
          placeholder={"تمرین جدید را وارد کنید."}
        />
      </View>
      <View style={styles.taskContainer}>
        <KeyboardAwareScrollView
          style={styles.container}
          contentContainerStyle={styles.containerContentStyle}
        >
          <TaskItem
            text={
              "دیگه نمردی خیلی جون سختی زیر ماشین سیانور اینارو تست کندیونه محترم سر ساعت 9 خودتو پرت کن پایین از پنجره اگه نمردی دوباره این کشس دیشسدی هشسخدی هخشسدی سش دسشهیدسشهیدشس یدشسیدسشیدشسنم دیشسمنیدشمسس شدسیدسشنیدشسن دیمشسد سسارو انجام بده"
            }
            date={"۱۳۷۶/۶/۶"}
          />
        </KeyboardAwareScrollView>
      </View>

      {keyboard ? null : (
        <View style={styles.buttonContainer}>
          <Button
            mode={"contained"}
            size={"big"}
            rippleColor={"lightGrey"}
            onPress={() => {
              <TaskItem text={value} date={"1376/6/6"} />;
            }}
          >
            {"اضافه کردن تمرین"}
          </Button>
        </View>
      )}
    </View>
  );
};
