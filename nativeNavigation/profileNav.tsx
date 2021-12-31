import React from "react";
import { Profile, EditProfile } from "../app/profile";
import { Support } from "../app/support";
import { AboutUs } from "../app/aboutUs";
import { FAQ } from "../app/FAQ"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProfileStack = createNativeStackNavigator();

export function profileNav() {
  return (
    <ProfileStack.Navigator initialRouteName={"Profile"}>
      <ProfileStack.Screen
        name={"Profile"}
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen name={"EditProfile"} component={EditProfile} />
      <ProfileStack.Screen name={"Support"} component={Support} />
      <ProfileStack.Screen name={"AboutUs"} component={AboutUs} />
      <ProfileStack.Screen name={"FAQ"} component={FAQ} />

    </ProfileStack.Navigator>
  );
}
