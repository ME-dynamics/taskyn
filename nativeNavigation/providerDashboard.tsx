import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { UserInfo } from "../app/userInfo";
import { Tasks } from "../app/task";
import { Dashboard } from "../app/dashboard";
import { Customers, CustomerRequests } from "../app/userList";

import { NoteNav } from "./noteNav";
const DashboardStack = createNativeStackNavigator();

function ProviderDashboardNavigation() {
  return (
    <DashboardStack.Navigator initialRouteName={"dashboard"}>
      <DashboardStack.Screen
        name={"customers"}
        options={{ headerShown: false }}
        component={Customers}
      />
      <DashboardStack.Screen
        name={"customerRequests"}
        options={{ headerShown: false }}
        component={CustomerRequests}
      />

      <DashboardStack.Screen
        name={"dashboard"}
        options={{ headerShown: false }}
        component={Dashboard}
      />
      <DashboardStack.Screen name={"userInfo"} component={UserInfo} />
      <DashboardStack.Screen name={"tasks"} component={Tasks} />

      <DashboardStack.Screen
        name={"notes"}
        component={NoteNav}
        options={{ headerShown: false }}
      />
    </DashboardStack.Navigator>
  );
}

export const ProviderDashboardNav = observer(ProviderDashboardNavigation);
