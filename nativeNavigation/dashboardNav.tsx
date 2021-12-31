import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { DoctorList } from "../app/doctorList";
import { UserInfo } from "../app/userInfo";
import { Note } from "../app/note";
import { Tasks } from "../app/task";
import { Dashboard } from "../app/dashboard";

import { getRole } from "../app/authentication";

const DashboardStack = createNativeStackNavigator();

function DashboardNavigation() {
  const role = getRole();
  return (
    <DashboardStack.Navigator initialRouteName={"dashboard"}>
      <DashboardStack.Screen
        name={"dashboard"}
        options={{ headerShown: false }}
        component={Dashboard}
      />
      <DashboardStack.Screen name={"doctorList"} component={DoctorList} />
      <DashboardStack.Screen name={"userInfo"} component={UserInfo} />
      <DashboardStack.Screen name={"tasks"} component={Tasks} />
      {role === "provider" ? (
        <DashboardStack.Screen name={"notes"} component={Note} />
      ) : null}
    </DashboardStack.Navigator>
  );
}

export const DashboardNav = observer(DashboardNavigation);
