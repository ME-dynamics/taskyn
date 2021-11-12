import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { THEME, Input, Paragraph } from "./app/library";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { PatientList } from "./app/patients/screens/patientList";
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
import { Header } from "react-native/Libraries/NewAppScreen";
import { UserInfo } from "./app/userInfo/screens/userInfo";
import { observer } from "mobx-react-lite";
import { Note } from "./app/note";
import { ContactUS } from "./app/contactUs/screens/ContactUs";
import { FormResult } from "./app/formResult/screens/formResult";
import { NoteList } from "./app/note/screens/noteList";
import { Tasks } from "./app/task";
import { FormDetails, Questionnaire } from "./app/form/screens";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import { DoctorList } from "./app/doctorList/screens/DoctorList";
import { AcceptPatientList } from "./app/patients/screens/acceptPtaientList";
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
      <DashboardStack.Screen name="Task" component={Tasks} />
      <DashboardStack.Screen name="Form" component={FormList} />
      {/* <DashboardStack.Screen name="UserInfo" component={UserInfo} /> */}
      <DashboardStack.Screen name="Note" component={Note} />
      <DashboardStack.Screen name="DoctorList" component={DoctorList} />
      <DashboardStack.Screen name="FormsHistory" component={FormResult} />
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
      {/* <DashboardStack.Screen name="UserInfo" component={UserInfo} /> */}
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
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen name="Support" component={ContactUS} />
      {/* <Stack.Screen name="AboutUs" component={} />
      <Stack.Screen name="Questions" component={} />
      <Stack.Screen name="Terms" component={} />
      <Stack.Screen name="Exit" component={} /> */}
    </ProfileStack.Navigator>
  );
}

function MyTabs() {
  const role = "provider";

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
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Form"
        component={UserInfo}
        options={{
          tabBarLabel: "فرم",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="InitialRoot"
        component={role === "provider" ? PatientsTab : DashboardTab}
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
const Tabs = observer(MyTabs);
function AppComponent() {
  const isSignedIn = true;
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
        <Tabs />
      ) : (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Authentication} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export const App = observer(AppComponent);
