import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./app/library";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Patients } from "./app/patients/screens";
import { ScrollView } from "react-native-gesture-handler";
function FirstTab() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></View>
  );
}

function SecondTab() {
  return <Patients />;
}

function ThirdTab() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    ></View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="خانه"
      screenOptions={{
        tabBarActiveTintColor: colors.primaryPurple,
        
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
