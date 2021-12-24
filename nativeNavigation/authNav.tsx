import React from "react";
import { Authentication, Identify } from "../app/authentication";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Title, THEME } from "../app/library";

const AuthStack = createNativeStackNavigator();

export function AuthNav() {
  return (
    <AuthStack.Navigator initialRouteName={"Authentication"}>
      <AuthStack.Screen
        name={"Authentication"}
        component={Authentication}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={"Identify"}
        component={Identify}
        options={{
          headerStyle: { backgroundColor: THEME.COLORS.BACKGROUND },
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTitle: () => <Title>{"تایید شماره"}</Title>,
        }}
      />
    </AuthStack.Navigator>
  );
}
