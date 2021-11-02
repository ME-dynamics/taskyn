import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { THEME } from "../../../library";
import { IEditProps, IUndoneProps } from "../TaskItem/type";

export function EditButtonsComponent(props: IEditProps) {
  const { text, setEdit, setValue, setDone } = props;
  return (
    <React.Fragment>
      <BorderlessButton
        onPress={() => {
          setValue(text);
          setEdit(false);
        }}
        rippleColor={THEME.COLORS.GREY.LIGHT}
      >
        <AntDesign name="closesquareo" size={28} color="black" />
      </BorderlessButton>
      <BorderlessButton
        onPress={() => {
          setDone(false);
          setEdit(false);
        }}
        rippleColor={THEME.COLORS.PRIMARY.NORMAL}
      >
        <AntDesign name="checkcircleo" size={28} color="black" />
      </BorderlessButton>
    </React.Fragment>
  );
}
export function UnDoneButtonsComponent(props: IUndoneProps) {
  const { setEdit, setDone } = props;
  return (
    <React.Fragment>
      <BorderlessButton onPress={() => {}} rippleColor={THEME.COLORS.GREY.LIGHT}>
        <AntDesign name="closesquareo" size={28} color="black" />
      </BorderlessButton>
      <BorderlessButton
        onPress={() => {
          setEdit(true);
        }}
        rippleColor={THEME.COLORS.PRIMARY.LIGHT}
      >
        <Feather name="edit" size={28} color="black" />
      </BorderlessButton>
      <BorderlessButton
        onPress={() => {
          setDone(true);
        }}
        rippleColor={THEME.COLORS.PRIMARY.DARK}
      >
        <AntDesign name="checkcircleo" size={28} color="black" />
      </BorderlessButton>
    </React.Fragment>
  );
}
