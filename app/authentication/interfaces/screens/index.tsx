import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Input, Button, Headline } from "../../../library";

import { auth, input } from "../../entities";
import {
  onPhoneChange,
  passwordlessStart,
  onOtpNumberChange,
  passwordlessVerify,
} from "../../usecases";
import { styles } from "./styles";
import { confirm, phone } from "./constant";


function AuthenticationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Headline style={styles.title}>{"ورود به تسکین"}</Headline>
      </View>
      <View style={styles.authContainer}>
        <View style={styles.itemsContainer}>
          <View style={styles.itemsMargin}>
            <Input
              value={auth.otpMode ? input.otpNumber : input.phoneNumber}
              onChangeText={auth.otpMode ? onOtpNumberChange : onPhoneChange}
              title={auth.otpMode ? confirm.title : phone.title}
              placeholder={
                auth.otpMode ? confirm.placeholder : phone.placeholder
              }
              mode={"outlined"}
              validation={
                auth.otpMode ? input.otpValidation : input.phoneValidation
              }
              timer={auth.otpMode ? { minute: 1, second: 0 } : undefined}
            />
          </View>

          <View style={styles.itemsMargin}>
            <Button
              onPress={auth.otpMode ? passwordlessVerify : passwordlessStart}
              mode={"contained"}
              rippleColor={"lightGrey"}
              size={"big"}
            >
              {auth.otpMode ? confirm.button : phone.button}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
export const Authentication = observer(AuthenticationScreen);
