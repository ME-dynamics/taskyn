import React, { useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { THEME } from "../../../library";
import { IDropPickerProps } from "../type";

function itemConventor(item: string[]) {
  const result = [];
  for (let index = 0; index < item.length; index++) {
    const element = item[index];
    result.push({ label: element, value: element });
  }
  return result;
}

export function DropPicker(props: IDropPickerProps) {
  const { title, item } = props;
  const myTheme = require("./style");
  DropDownPicker.addTheme("myTheme", myTheme);
  DropDownPicker.setTheme("myTheme");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(itemConventor(item ? item : [""]));
  return (
    <View>
      <DropDownPicker
        textStyle={{ fontFamily: THEME.FONTS.REGULAR }}
        rtl={true}
        // style={{width:widthPercentageToDP(90)}}
        selectedItemLabelStyle={{
          fontFamily: THEME.FONTS.BOLD,
        }}
        listMode={"SCROLLVIEW"}
        placeholder={title}
        placeholderStyle={{
          color: THEME.COLORS.GREY.NORMAL,
          fontFamily: THEME.FONTS.MEDIUM,
        }}
        showArrowIcon={true}
        mode={"BADGE"}
        showBadgeDot={true}
        open={open}
        value={value}
        
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
}
