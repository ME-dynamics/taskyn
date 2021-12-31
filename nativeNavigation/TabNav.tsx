import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardNav } from "./dashboardNav";
import { profileNav } from "./profileNav";
import { getRole } from "../app/authentication";
import { TaskynIcon, THEME } from "../app/library";
import { FormList } from "../app/formList/screens/formList";

const Tab = createBottomTabNavigator();

export function TabNav() {
  const role = getRole();
  return (
    <Tab.Navigator
      initialRouteName={"dashboardTab"}
      screenOptions={{
        tabBarActiveTintColor: THEME.COLORS.PRIMARY.NORMAL,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="ProfileTab"
        component={profileNav}
        options={{
          tabBarLabel: "پروفایل",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TaskynIcon name={"profile"} size={size} color={color} svg />
          ),
        }}
      />

      <Tab.Screen
        name="Form"
        component={FormList}
        options={{
          tabBarLabel: "فرم",
          tabBarIcon: ({ color, size }) => (
            <TaskynIcon name={"document"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"dashboardTab"}
        component={DashboardNav}
        options={{
          tabBarLabel: role === "provider" ? "بیماران" : "داشبورد",
          tabBarIcon: ({ color, size }) => (
            <TaskynIcon name={"home"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
