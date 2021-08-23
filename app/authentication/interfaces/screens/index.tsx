import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import { Input, Button } from "../../../library";
import {styles} from "./style";

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>تسکین </Text>
      <Text style={styles.loginTitle1}>ورود </Text>
      <View style={styles.loginBox}>
        <View style={styles.inputGroups}>
          <Input
            title={"شماره موبایل :"}
            placeholder={"لطفا شماره موبایل خود را وارد کنید"}
            mode={"outlined"}
          />
          <View style={styles.inputGroups1}>
            <Button
            mode={"contained"}
            rippleColor={"lightGrey"}
            size={"big"}
            > 
            {"ورود"}
            </Button>
         
          </View>
        </View>
      </View>
    </View>
  );
};
