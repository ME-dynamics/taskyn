import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardNav } from "./dashboardNav";
import { Profile } from "../app/profile";
import { getRole } from "../app/authentication";
import { TaskynIcon, THEME } from "../app/library";
import { FormList } from "../app/formList/screens/formList";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

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
        component={Profile}
        options={{
          tabBarLabel: "پروفایل",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TaskynIcon name={"instagram"} size={size} color={color} svg />
          ),
        }}
      />

      <Tab.Screen
        name="Form"
        component={FormList}
        options={{
          tabBarLabel: "فرم",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"dashboardTab"}
        component={DashboardNav}
        options={{
          tabBarLabel: role === "provider" ? "بیماران" : "داشبورد",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
