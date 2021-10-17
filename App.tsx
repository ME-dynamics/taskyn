import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME, Input } from "./app/library";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Patients } from "./app/patients/screens";
import { ScrollView } from "react-native-gesture-handler";
import { Task } from "./app/task/screens";
import { Authentication } from "./app/authentication";
import { Profile } from "./app/profile/interfaces/screens";
import { DoctorProfile } from "./app/doctorProfile/screens";
import { Dashboard } from "./app/dashboard/screens";
import { NoteScreen } from "./app/note/screens";
import { FormList } from "./app/formList/screens";

function FirstTab() {
  return <Dashboard />;
}

function SecondTab() {
  
  return <DoctorProfile  />;
}

function ThirdTab() {
  return (
    <FormList />
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="خانه"
      screenOptions={{
        tabBarActiveTintColor: THEME.COLORS.PRIMARY.NORMAL,
         headerShown: false ,
      }}
    >
      <Tab.Screen
        name="مشخصات"
        component={ThirdTab}
        options={{
          
          tabBarLabel: "مشخصات",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="لیست بیماران"
        component={SecondTab}
        
        options={{
          tabBarLabel: "بیماران",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="خانه"
        component={FirstTab}
        options={{
          tabBarLabel: "خانه",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
