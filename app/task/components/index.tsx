import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Button, Caption, Paragraph, THEME, Touchable } from "../../library";
import { styles } from "./style";
import { IInputProps, ITaskItemProps } from "./type";

export function TaskItem(props: ITaskItemProps) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { text, date } = props;
  const [value, setValue] = useState(text);
  const [edit, setEdit] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <View style={styles.textContainer}>
          {!edit ? (
            <Paragraph>{value}</Paragraph>
          ) : (
            <TextInput onChangeText={setValue} value={value} multiline={true} />
          )}
        </View>
        <View style={styles.footer}>
          <View style={styles.dateContainer}>
            <Caption>{date}</Caption>
          </View>
          <View
            style={
              !done
                ? styles.buttonContainer
                : [styles.buttonContainer, { justifyContent: "space-between" }]
            }
          >
            {!done ? (
              edit ? (
                <React.Fragment>
                  <BorderlessButton
                    onPress={() => {
                      setValue(text);
                      setEdit(false);

                    }}
                    rippleColor={THEME.COLORS.ERROR}
                  >
                    <AntDesign name="closesquareo" size={28} color="black" />
                  </BorderlessButton>
                  <BorderlessButton
                    onPress={() => {
                      setDone(false);
                      setEdit(false);
                    }}
                    rippleColor={THEME.COLORS.GREEN}
                  >
                    <AntDesign name="checkcircleo" size={28} color="black" />
                  </BorderlessButton>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <BorderlessButton
                    onPress={() => {}}
                    rippleColor={THEME.COLORS.ERROR}
                  >
                    <AntDesign name="closesquareo" size={28} color="black" />
                  </BorderlessButton>
                  <BorderlessButton
                    onPress={() => {
                      setEdit(true);
                    }}
                    rippleColor={THEME.COLORS.YELOOW}
                  >
                    <Feather name="edit" size={28} color="black" />
                  </BorderlessButton>
                  <BorderlessButton
                    onPress={() => {
                      setDone(true);
                    }}
                    rippleColor={THEME.COLORS.GREEN}
                  >
                    <AntDesign name="checkcircleo" size={28} color="black" />
                  </BorderlessButton>
                </React.Fragment>
              )
            ) : (
              <FontAwesome5
                name="check-double"
                size={30}
                color={THEME.COLORS.GREENLIKE}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
