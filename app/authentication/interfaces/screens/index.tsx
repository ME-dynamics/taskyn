import React from "react";
import {  View } from "react-native";
import { Observer } from "mobx-react-lite";
import { Input, Button, Headline } from "../../../library";

import { auth, input } from "../../entities";
import { onPhoneChange } from "../../usecases"
import { styles } from "./styles";

export const Authentication = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Headline style={styles.title}>{"ورود به تسکین"}</Headline>
      </View>

      <View style={styles.authContainer}>
        <View style={styles.itemsContainer}>
        <Observer>
          {() => (
            <View style={styles.itemsMargin}>
            <Input
              value={input.phoneNumber}
              onChangeText={onPhoneChange}
              title={"شماره موبایل :"}
              placeholder={"لطفا شماره موبایل خود را وارد کنید"}
              mode={"outlined"}
              validation={input.phoneValidation}
            />
            </View>
          )}
        </Observer>

        <Observer>
          {() => (
            <View style={styles.itemsMargin}>

            <Button mode={"contained"} rippleColor={"lightGrey"} size={"big"}>
              {"ورود"}
            </Button>
            </View>
          )}
        </Observer>
        </View>
        
      </View>
    </View>
  );
};
