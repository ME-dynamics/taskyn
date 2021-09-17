import React from "react";
import { View, TextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { observer } from "mobx-react-lite";
import { MaterialIcons } from "@expo/vector-icons";

import { material } from "react-native-typography";
import { styles, iconStyle } from "./styles";

import { ISearchBarProps } from "./types";

function SearchBarComponent(props: ISearchBarProps) {
  const { onChangeText, onClear, value, placeholder } = props;
  const { size, color,selectionColor } = iconStyle;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name={"search"} size={size} color={color} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[material.body1, styles.input]}
          textAlign={"right"}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          selectionColor={selectionColor}
        />
      </View>
      <View style={styles.iconContainer}>
        {value !== "" ? (
          <BorderlessButton onPress={onClear}>
            <MaterialIcons name={"clear"} size={size} color={color} />
          </BorderlessButton>
        ) : null}
      </View>
    </View>
  );
};

export const SearchBar = observer(SearchBarComponent);