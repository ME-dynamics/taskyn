import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { THEME, Input } from "./app/library";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Patients } from "./app/patients/screens";
import { ScrollView } from "react-native-gesture-handler";
import { Task } from "./app/task/screens";
import { Authentication, getLoggedIn, initToken } from "./app/authentication";
import { Profile } from "./app/profile/interfaces/screens";
import { DoctorProfile } from "./app/doctorProfile/screens";
import { Dashboard } from "./app/dashboard/screens";
import { FormList } from "./app/formList/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "react-native/Libraries/NewAppScreen";
import { UserInfo } from "./app/userInfo/screens";
import { observer } from "mobx-react-lite";
import { NoteScreen } from "./app/note";

function LoginScreen() {
  return <Authentication />;
}

function FirstTab() {
  return <NoteScreen />;
}

function SecondTab() {
  return <DoctorProfile />;
}

function ThirdTab() {
  return <FormList />;
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="خانه"
      screenOptions={{
        tabBarActiveTintColor: THEME.COLORS.PRIMARY.NORMAL,
        headerShown: false,
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
const Stack = createNativeStackNavigator();

function AppComponent() {
  const isSignedIn = getLoggedIn();
  const [isAppReady, setAppReady] = useState<boolean>(false);
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await initToken();
      } catch (error) {
        console.warn(error);
      } finally {
        setAppReady(true);
      }
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);
  if (!isAppReady) {
    return null;
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      {isSignedIn ? (
        <MyTabs />
      ) : (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export const App = observer(AppComponent);
