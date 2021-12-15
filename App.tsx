import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { THEME, Input, Paragraph, TaskynIcon, Container } from "./app/library";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { PatientList } from "./app/patients/screens/patientList";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import {
  Authentication,
  getLoggedIn,
  getRole,
  initToken,
} from "./app/authentication";
import { Profile } from "./app/profile/screens/Profile";
import { Dashboard } from "./app/dashboard/screens";
import { FormList } from "./app/formList/screens/formList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserInfo } from "./app/userInfo/screens/userInfo";
import { observer } from "mobx-react-lite";
import { Note } from "./app/note1/screens/Note";
import { FormResult } from "./app/formResult/screens/formResult";
import { NoteList } from "./app/note/screens/noteList";
import { Tasks } from "./app/task";
import { FormDetails, MbtiResult, Questionnaire } from "./app/form/screens";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import { DoctorList } from "./app/doctorList/screens/DoctorList";
import { AcceptPatientList } from "./app/patients/screens/acceptPtaientList";
import { Support } from "./app/support/screens/SupportScreen";
import { EditProfile } from "./app/editProfile/screens";
import { AboutUs } from "./app/aboutUs/screens";
import { FrequentlyQuestions } from "./app/frequentlyQuestions/screens";
import { Filter } from "./app/formResult/screens/filterScreen";
import { View, I18nManager } from "react-native";
import { Identify } from "./app/authentication/screens/Identify";
const DashboardStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const PatientStack = createNativeStackNavigator();
const FormListStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function PatientsTab() {
  return (
    <PatientStack.Navigator
      initialRouteName="PatientList"
      screenOptions={{
        headerShown: false,
        headerTintColor: "white",
        headerStyle: { backgroundColor: THEME.COLORS.PRIMARY.NORMAL },
      }}
    >
      <PatientStack.Screen name="PatientList" component={PatientList} />
      <PatientStack.Screen
        name="AcceptPatientList"
        component={AcceptPatientList}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: (props) => (
            <Paragraph style={{ fontSize: 18, top: 4, color: "white" }}>
              {props.children}
            </Paragraph>
          ),
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
          },
        }}
      />
      <PatientStack.Screen
        name="DashboardStack"
        component={Dashboard}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: (props) => (
            <Paragraph style={{ fontSize: 18, top: 4, color: "white" }}>
              {props.children}
            </Paragraph>
          ),
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
          },
        }}
      />
      <DashboardStack.Screen
        name="FormDetails"
        component={FormDetails}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: (props) => (
            <Paragraph style={{ fontSize: 18, top: 4, color: "white" }}>
              {props.children}
            </Paragraph>
          ),
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
          },
        }}
      />
      <DashboardStack.Screen
        name="Questionnaire"
        component={Questionnaire}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <DashboardStack.Screen name="Task" component={Tasks} />
      <DashboardStack.Screen name="Form" component={FormList} />
      <DashboardStack.Screen name="UserInfo" component={UserInfo} />
      <DashboardStack.Screen name="Note" component={Note} />
      <DashboardStack.Screen name="DoctorList" component={DoctorList} />
      <DashboardStack.Screen name="FormsHistory" component={FormResult} />
      <DashboardStack.Screen name="MbtiResult" component={MbtiResult} />
    </PatientStack.Navigator>
  );
}
export function FornListTab() {
  return (
    <FormListStack.Navigator
      initialRouteName="FormList"
      screenOptions={{ headerShown: false }}
    >
      <FormListStack.Screen name="FormList" component={FormList} />
      <FormListStack.Screen
        name="FormDetails"
        component={FormDetails}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: (props) => (
            <Paragraph style={{ fontSize: 18, top: 4, color: "white" }}>
              {props.children}
            </Paragraph>
          ),
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
          },
        }}
      />
      <FormListStack.Screen
        name="Questionnaire"
        component={Questionnaire}
        options={{
          headerShown: true,
        }}
      />
    </FormListStack.Navigator>
  );
}
export function DashboardTab() {
  return (
    <DashboardStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitle: (props) => (
          <Paragraph style={{ fontSize: 18, top: 4, color: "white" }}>
            {props.children}
          </Paragraph>
        ),
        headerShadowVisible: false,
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
        },
      }}
    >
      <DashboardStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen name="Task" component={Tasks} />
      <DashboardStack.Screen name="Form" component={FormList} />
      <DashboardStack.Screen name="UserInfo" component={UserInfo} />
      <DashboardStack.Screen name="Note" component={Note} />
      <DashboardStack.Screen name="DoctorList" component={DoctorList} />
      <DashboardStack.Screen name="FormsHistory" component={FormResult} />
    </DashboardStack.Navigator>
  );
}
export function ProfileTab() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitle: (props) => (
          <Paragraph style={{ fontSize: 18, top: 4, color: "white" }}>
            {props.children}
          </Paragraph>
        ),
        headerShadowVisible: false,
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
        },
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={Note}
        options={{ headerShown: false }}
      />

      <ProfileStack.Screen name="Support" component={Support} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="AboutUs" component={AboutUs} />
      <ProfileStack.Screen
        name="FrequentlyQuestions"
        component={FrequentlyQuestions}
      />
      {/* <ProfileStack.Screen ="Terms" component={} />
      <ProfileStack.Screen ="Exit" component={} /> */}
    </ProfileStack.Navigator>
  );
}

function MyTabs() {
  const role = "provider";
  // const [fontsLoaded] = useFonts({
  //   IcoMoon: require("./assets/fonts/icomoon.ttf"),
  // });
  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <Tab.Navigator
      initialRouteName="InitialRoot"
      screenOptions={{
        tabBarActiveTintColor: THEME.COLORS.PRIMARY.NORMAL,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          tabBarLabel: "پروفایل",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TaskynIcon  name={"profile"} size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Form"
        component={FornListTab}
        options={{
          tabBarLabel: "فرم",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="InitialRoot"
        component={role === "provider" ? DashboardTab : DashboardTab}
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

function Test() {
  return (
    <Container>
      <View
        style={{ top: 120, width: 100, height: 100, backgroundColor: "blue" }}
      />
    </Container>
  );
}

const Tabs = observer(MyTabs);
function AppComponent() {
  I18nManager.allowRTL(false);
  const isSignedIn = false;
  const [isAppReady, setAppReady] = useState<boolean>(false);
  const [fontsLoaded] = useFonts({
    TaskynIcon: require("./assets/fonts/icomoon.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      try {
        await Promise.all([SplashScreen.preventAutoHideAsync(), initToken()]);
      } catch (error) {
        console.warn(error);
      } finally {
        setAppReady(true);
      }
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (isAppReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady, fontsLoaded]);
  if (!isAppReady || !fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      {isSignedIn ? (
        <Tabs />
      ) : (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Test} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export const App = observer(AppComponent);
