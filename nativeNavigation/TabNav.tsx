import React from "react";
import { observer } from "mobx-react-lite";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProviderDashboardNav } from "./providerDashboard";
import { CustomerDashboardNav } from "./customerDashboard";
import { ProfileNav } from "./profileNav";
import { getRole } from "../app/authentication";
import { TaskynIcon, THEME } from "../app/library";
import { TestList, Questionnaire, FormDetails, MbtiResult } from "../app/psychologyTests";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const isProvider = getRole() === "provider";
  return (
    <Tab.Navigator
      initialRouteName={"dashboardTab"}
      screenOptions={{
        tabBarActiveTintColor: THEME.COLORS.PRIMARY.NORMAL,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={"profileTab"}
        component={ProfileNav}
        options={{
          tabBarLabel: "پروفایل",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TaskynIcon name={"profile"} size={size} color={color} svg />
          ),
        }}
      />

      <Tab.Screen
        name={"testTab"}
        component={MbtiResult}
        options={{
          tabBarLabel: "تست",
          tabBarIcon: ({ color, size }) => (
            <TaskynIcon name={"document"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"dashboardTab"}
        component={isProvider ? ProviderDashboardNav : CustomerDashboardNav}
        options={{
          tabBarLabel: isProvider ? "بیماران" : "داشبورد",
          tabBarIcon: ({ color, size }) => (
            <TaskynIcon name={"home"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const TabNav = observer(TabNavigation);
