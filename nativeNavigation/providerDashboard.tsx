import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { UserInfo } from "../app/userInfo";
import { Tasks } from "../app/task";
import { Dashboard } from "../app/dashboard";
import { Customers, CustomerRequests } from "../app/userList";

import { headerOptions } from "./headerOptions";

import { NoteNav } from "./noteNav";
const DashboardStack = createNativeStackNavigator();

function ProviderDashboardNavigation() {
  return (
    <DashboardStack.Navigator initialRouteName={"customers"}>
      <DashboardStack.Screen
        name={"customers"}
        options={{ headerShown: false }}
        component={Customers}
      />
      <DashboardStack.Screen
        name={"customerRequests"}
        options={{ ...headerOptions, title: "درخواست ها" }}
        component={CustomerRequests}
      />

      <DashboardStack.Screen
        name={"dashboard"}
        options={{ ...headerOptions, title: "داشبورد" }}
        component={Dashboard}
      />
      <DashboardStack.Screen
        name={"userInfo"}
        component={UserInfo}
        options={{ ...headerOptions, title: "پرونده بیمار" }}
      />
      <DashboardStack.Screen
        name={"tasks"}
        component={Tasks}
        options={{ ...headerOptions, title: "تمرینات" }}
      />

      <DashboardStack.Screen
        name={"notes"}
        component={NoteNav}
        options={{ headerShown: false }}
      />
    </DashboardStack.Navigator>
  );
}

export const ProviderDashboardNav = observer(ProviderDashboardNavigation);
