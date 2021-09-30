import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Paragraph } from "../../library";
import { styles } from "./style";
import { ITaskItemProps } from "./type";

export function TaskItem(props: ITaskItemProps) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { text } = props;
  return (
    <View style={styles.checkboxContainer}>
      <View style={styles.textContainer}>
        <Paragraph>{text}</Paragraph>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode={"text"}
          bold
          size={"small"}
          rippleColor={"lightGrey"}
        >
          {"ویرایش"}
        </Button>
        <Button mode={"text"} bold size={"small"} rippleColor={"lightGrey"}>
          {"حذف"}
        </Button>
        <Button mode={"text"} bold size={"small"} rippleColor={"lightGrey"}>
          {"انجام شد"}
        </Button>
        {/* <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}
      </View>
    </View>
  );
}
