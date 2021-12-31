import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { DoctorList } from "../app/doctorList";
import { UserInfo } from "../app/userInfo";
import { Tasks } from "../app/task";
import { Dashboard } from "../app/dashboard";

const DashboardStack = createNativeStackNavigator();

function CustomerDashboardNavigation() {
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
    </DashboardStack.Navigator>
  );
}

export const CustomerDashboardNav = observer(CustomerDashboardNavigation);
