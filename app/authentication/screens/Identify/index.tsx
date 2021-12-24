import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { autorun } from "mobx";
import { observer } from "mobx-react-lite";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useNavigation } from "@react-navigation/native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
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
import { onOtpNumberChange, passwordlessVerify } from "../../usecases";
import { styles, logoSize } from "./styles";

function IdentifyScreen() {
  const navigator = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const CELL_COUNT = 5;
  const ref = useBlurOnFulfill({
    value: inputState.otpNumber,
    cellCount: CELL_COUNT,
  });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: inputState.otpNumber,
    setValue: onOtpNumberChange,
  });
  useEffect(() => {
    const disposer = autorun(() => {
      if (inputState.otpNumber.length === 5) {
        setLoading(true);
        passwordlessVerify();
      }
    });
    return () => {
      return disposer();
    };
  }, []);
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
              <Subheading style={styles.phoneNumber}>{` (${digitsEnToFa(
                inputState.phoneNumber
              )}) `}</Subheading>
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
            onPress={navigator.goBack}
          >
            {"ویرایش شماره"}
          </Button>
        </View>
        <View style={styles.textFieldContainer}>
          <CodeField
            ref={ref}
            {...props}
            value={inputState.otpNumber}
            onChangeText={onOtpNumberChange}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType={"number-pad"}
            textContentType={"oneTimeCode"}
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                style={[styles.line, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                <Headline>{symbol || (isFocused ? <Cursor /> : null)}</Headline>
              </View>
            )}
          />
          <View style={styles.timerContainer}>
            <Timer minute={1} second={20} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode={"contained"}
            loading={loading}
            disabled={inputState.otpNumber.length !== 5}
            rippleColor={"lightGrey"}
            size={"wide"}
          >
            {"ورود"}
          </Button>
        </View>
      </Scroller>
    </Container>
  );
}

export const Identify = observer(IdentifyScreen);
