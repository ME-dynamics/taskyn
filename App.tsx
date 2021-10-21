import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME, Input } from "./app/library";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { AcceptPatientList, PatientList } from "./app/patients/screens";
import { ScrollView } from "react-native-gesture-handler";
import { Task } from "./app/task/screens";
import { Authentication, getLoggedIn, getRoled } from "./app/authentication";
import { Profile } from "./app/profile/interfaces/screens";
import { DoctorProfile } from "./app/doctorProfile/screens";
import { Dashboard } from "./app/dashboard/screens";
import { FormList } from "./app/formList/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "react-native/Libraries/NewAppScreen";
import { UserInfo } from "./app/userInfo/screens";
import { observer } from "mobx-react-lite";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export function PatientsTab() {
  return (
    <Stack.Navigator
      initialRouteName="PatientList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="PatientList" component={PatientList} />
      <Stack.Screen
        name="AcceptPatientList"
        component={AcceptPatientList}
      />
    </Stack.Navigator>
  );
}

// export function DashboardTab() {
//   return (
//     <Stack.Navigator
//       initialRouteName="PatientList"
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen name="Task" component={Task} />
//       <Stack.Screen name="Form" component={FormList} />
//       <Stack.Screen name="UserInfo" component={UserInfo} />
//       <Stack.Screen name="Note" component={} />
//       <Stack.Screen name="FormsHistory" component={} />

//     </Stack.Navigator>
//   );
// }
// export function ProfileTab() {
//   return (
//     <Stack.Navigator
//       initialRouteName="PatientList"
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen name="Support" component={} />
//       <Stack.Screen name="AboutUs" component={} />
//       <Stack.Screen name="Questions" component={} />
//       <Stack.Screen name="Terms" component={} />
//       <Stack.Screen name="Exit" component={} />

//     </Stack.Navigator>
//   );
// }



function MyTabs() {
  const role = getRoled();

  return (
    <Tab.Navigator
      initialRouteName="InitialRoot"
      screenOptions={{
        tabBarActiveTintColor: THEME.COLORS.PRIMARY.NORMAL,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={role === "provider" ? DoctorProfile : Profile}
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
        component={FormList}
        options={{
          tabBarLabel: "فرم",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="InitialRoot"
        component={role === "provider" ? PatientsTab : Dashboard}
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
const AutheticationStack = createNativeStackNavigator();
const Tabs = observer(MyTabs);
function AppComponent() {
  // const isSignedIn = getLoggedIn();
  const isSignedIn = true;

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Tabs />
      ) : (
        <AutheticationStack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <AutheticationStack.Screen name="Home" component={Authentication} />
        </AutheticationStack.Navigator>
      )}
    </NavigationContainer>
  );
}

export const App = observer(AppComponent);
