import React, { useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { THEME } from "../../library";

export  function DropPicker() {
  const myTheme = require("./style");
  DropDownPicker.addTheme("myTheme", myTheme);
  DropDownPicker.setTheme("myTheme");


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "سیب", value: "سیب" },
    { label: "خیار", value: "خیاز" },
  ]);
  return (
    <View>
      <DropDownPicker
        textStyle={{ fontFamily: THEME.FONTS.REGULAR }}
        rtl={true}
        selectedItemLabelStyle={{
          fontFamily: THEME.FONTS.BOLD,
        }}
        placeholder={"مقدار وارد کنید"}
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
