import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Input, Title, Paragraph } from "../../library";
import { styles } from "./style";
import { TaskItem } from "../components";

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
        <TaskItem
          text={
            "دیگه نمردی خیلی جون سختی زیر ماشین سیانور اینارو تست کندیونه محترم سر ساعت 9 خودتو پرت کن پایین از پنجره اگه نمردی دوباره این کارو انجام بده"
          }
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button mode={"contained"} size={"big"} rippleColor={"lightGrey"}>
          {"اضافه کردن تمرین"}
        </Button>
      </View>
    </View>
  );
};
