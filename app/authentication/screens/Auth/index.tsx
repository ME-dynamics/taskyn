import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Input, Button, Headline, Logo, Paragraph } from "../../../library";

import { auth, input } from "../../entities";
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
  return (
    <KeyboardAwareScrollView style={styles.container} scrollEnabled={false}>
      <View style={styles.titleContainer}>
        <View style={styles.logoContainer}>
          <Logo size={logoSize} color={"white"} />
        </View>
        <Headline style={styles.title}>{"ورود به تسکین"}</Headline>
      </View>
      <View style={styles.authContainer}>
        <View style={styles.itemsContainer}>
          <View style={styles.itemsMargin}>
            {auth.otpMode ? (
              <Input
                value={input.otpNumber}
                onChangeText={onOtpNumberChange}
                title={confirm.title}
                placeholder={confirm.placeholder}
                mode={"outlined"}
                validation={input.otpValidation}
                timer={{ minute: 1, second: 0 }}
              />
            ) : (
              <Input
                value={input.phoneNumber}
                onChangeText={onPhoneChange}
                title={phone.title}
                placeholder={phone.placeholder}
                mode={"outlined"}
                validation={input.phoneValidation}
              />
            )}
          </View>

          <View style={styles.itemsMargin}>
            {auth.otpMode ? (
              <Button
                onPress={passwordlessVerify}
                mode={"contained"}
                rippleColor={"lightGrey"}
                size={"big"}
              >
                {confirm.button}
              </Button>
            ) : (
              <Button
                onPress={passwordlessStart}
                mode={"contained"}
                rippleColor={"lightGrey"}
                size={"big"}
              >
                {phone.button}
              </Button>
            )}
          </View>
        </View>
        <View style={styles.termsContainer}>
          <Paragraph style={styles.terms}>
            {"حریم خصوصی و شرایط و قوانین استفاده از سرویس های تسکین موافقم."}
          </Paragraph>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
export const Authentication = observer(AuthenticationScreen);
