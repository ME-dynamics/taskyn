import React, { useState } from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Logo, Subheading, THEME, WebIcon, Headline } from "../../../library";
import { styles, logoSize } from "./styles";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Timer } from "../../../library/Timer";
const phoneNumber = "۰۹۱۹۰۷۵۵۷۶۷";
export function Identify() {
  // function TextField() {
  const CELL_COUNT = 5;
  const mode = "line";
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <KeyboardAwareScrollView style={styles.container} scrollEnabled={false}>
      <View style={styles.titleContainer}>
        <View style={styles.logoContainer}>
          <Logo size={logoSize} color={"primary"} />
        </View>
        <View style={styles.title}>
          <Subheading>
            {"کد تایید برای شماره "}
            <Subheading
              style={{ color: THEME.COLORS.PRIMARY.NORMAL }}
            >{` (${phoneNumber}) `}</Subheading>
            <Subheading>{"ارسال شد."}</Subheading>
          </Subheading>
          <Subheading style={{ paddingTop: 12 }}>
            {"لطفا کد را وارد کنید."}
          </Subheading>
        </View>
      </View>
      <View style={styles.textButtonContainer}>
        <Button
          mode={"text"}
          rippleColor={"lightGrey"}
          size={"FAB"}
          Icon={WebIcon}
        >
          {"ویرایش شماره"}
        </Button>
      </View>
      <View style={styles.textFieldContainer}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View key={index} style={[styles.line, isFocused && styles.focusCell]}>
              <Headline  onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Headline>
            </View>
          )}
        />
        <View style={styles.timerContainer}>
          <Timer minute={1} second={20} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode={"contained"} rippleColor={"lightGrey"} size={"wide"}>
          {"ورود"}
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
}
