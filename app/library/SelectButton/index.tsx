import React from "react";
import { View } from "react-native";
import { Checkbox } from "../CheckBox";
import { RadioButton } from "../RadioButton";
import { Tap } from "../Tap";
import { observer } from "mobx-react-lite";
import { styleGen } from "./styles";
import { ISelectButtonProps } from "./types";
import { Paragraph } from "..";

function SelectButtonComponent(props: ISelectButtonProps) {
  const { mode, Label, selected, size, onPress } = props;
  function renderSelector() {
    if (mode === "checkbox") {
      return <Checkbox checked={selected} size={size} />;
    }
    return <RadioButton checked={selected} size={size} />;
  }
  function onButtonPress() {
    if (onPress) {
      onPress();
    }
  }
  const styles = styleGen(size);
  return (
    <Tap onPress={onButtonPress}>
      <View style={styles.container}>
        <View style={styles.selectorContainer}>{renderSelector()}</View>
        <View style={styles.labelContainer}>
          <Label />
        </View>
      </View>
    </Tap>
  );
}

export const SelectButton = observer(SelectButtonComponent);
