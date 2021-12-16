import React, { useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import {
  Button,
  Logo,
  Subheading,
  Headline,
  Container,
  Scroller,
  Timer,
  TaskynIcon,
} from "../../../library";
import { inputState } from "../../entities";
import { styles, logoSize } from "./styles";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
function IdentifyScreen() {
  const CELL_COUNT = 5;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <Container>
      <Scroller style={styles.container} scrollEnabled={false}>
        <View style={styles.titleContainer}>
          <View style={styles.logoContainer}>
            <Logo size={logoSize} color={"primary"} />
          </View>
          <View style={styles.title}>
            <Subheading>
              {"کد تایید برای شماره "}
              <Subheading
                style={styles.phoneNumber}
              >{` (${inputState.phoneNumber}) `}</Subheading>
              <Subheading>{"ارسال شد."}</Subheading>
            </Subheading>
            <Subheading style={styles.enterCodeText}>
              {"لطفا کد را وارد کنید."}
            </Subheading>
          </View>
        </View>
        <View style={styles.textButtonContainer}>
          <Button
            mode={"text"}
            rippleColor={"lightGrey"}
            size={"small"}
            Icon={({ size, color }) => {
              return <TaskynIcon name={"pencil"} size={size} color={color} />;
            }}
          >
            {"ویرایش شماره"}
          </Button>
        </View>
        <View style={styles.textFieldContainer}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType={"number-pad"}
            textContentType={"oneTimeCode"}
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                style={[styles.line, isFocused && styles.focusCell]}
              >
                <Headline onLayout={getCellOnLayoutHandler(index)}>
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
      </Scroller>
    </Container>
  );
}

export const Identify = observer(IdentifyScreen);
