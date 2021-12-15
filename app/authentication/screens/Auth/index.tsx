import React, { useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import {
  Input,
  Button,
  Title,
  Logo,
  Paragraph,
  SelectButton,
} from "../../../library";

import { authState, inputState } from "../../entities";
import {
  onPhoneChange,
  passwordlessStart,
  onOtpNumberChange,
  passwordlessVerify,
} from "../../usecases";
import { styles, logoSize } from "./styles";
import { confirm, phone } from "./constant";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function AuthenticationScreen() {
  const [checked, setChecked] = useState(false);
  return (
    <KeyboardAwareScrollView style={styles.container} scrollEnabled={false}>
      <View style={styles.titleContainer}>
        <View style={styles.logoContainer}>
          <Logo size={logoSize} color={"primary"} />
        </View>
        <Title style={styles.title}>{"ورود به تسکین"}</Title>
      </View>
      <View style={styles.authContainer}>
        <View style={styles.itemsContainer}>
          <View style={styles.itemsMargin}>
            {authState.otpMode ? (
              <Input
                value={inputState.otpNumber}
                onChangeText={onOtpNumberChange}
                title={confirm.title}
                placeholder={confirm.placeholder}
                textAlign={"center"}
                mode={"outlined"}
                errors={inputState.otpValidation}
                keyboardType={"number-pad"}
              />
            ) : (
              <Input
                value={inputState.phoneNumber}
                onChangeText={onPhoneChange}
                title={phone.title}
                textAlign={"right"}
                placeholder={phone.placeholder}
                mode={"outlined"}
                errors={inputState.phoneValidation}
                keyboardType={"number-pad"}
                clearButton
              />
            )}
          </View>
          <View style={styles.termsContainer}>
            <SelectButton mode={"checkbox"} selected={false} size={24}>
              <Paragraph style={styles.terms}>
                {
                  "حریم خصوصی و شرایط و قوانین استفاده از سرویس های تسکین موافقم."
                }
              </Paragraph>
            </SelectButton>
          </View>
          <View style={styles.itemsMargin}>
            {authState.otpMode ? (
              <Button
                onPress={passwordlessVerify}
                mode={"contained"}
                rippleColor={"lightGrey"}
                size={"wide"}
              >
                {confirm.button}
              </Button>
            ) : (
              <Button
                onPress={passwordlessStart}
                mode={"contained"}
                rippleColor={"lightGrey"}
                size={"wide"}
              >
                {phone.button}
              </Button>
            )}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
export const Authentication = observer(AuthenticationScreen);
