import React from "react";
import { Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import { AcceptListCard } from "../components/AcceptListCard";
import { SearchBar, Touchable, Title, Tap } from "../../library";
import { Octicons, SimpleLineIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { styles } from "./styles";
import { PatientCard } from "../components/PatientCard";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// function AcceptListCardTap() {
//   return (
//     <View>
//       <AcceptListCard
//         description={"ادرس خ ازادی خ ازادی ک ازادی"}
//         id=""
//         image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
//         name="محمد سجاد سیف اله طرقی"
//         date={"فلان تاریخ"}
//       />
//     </View>
//   );
// }
// function PatientCardTap() {
//   return (
//     <View>
//       <PatientCard
//         description={"ادرس خ ازادی خ ازادی ک ازادی"}
//         id=""
//         image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
//         name="محمد سجاد سیف اله طرقی"
//         date={"فلان تاریخ"}
//       />
//     </View>
//   );
// }
// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="accept list"
//       screenOptions={{
//         tabBarActiveTintColor: colors.primaryPurple,
//         tabBarItemStyle: { height: 60 },
//       }}
//     >
//       <Tab.Screen
//         name="accept list"
//         component={PatientCardTap}
//         options={{
//           tabBarLabel: "accept list",

//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={30} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="patient list"
//         component={AcceptListCardTap}
//         options={{
//           tabBarLabel: "patient list",
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome5 name="clipboard-list" color={color} size={30} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

function PatientList({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          onChangeText={() => {}}
          onClear={() => {}}
          value={""}
          placeholder=""
        />
        <Tap onPress={() => navigation.navigate("Details")}>
          <View style={styles.iconContainer}>
            <SimpleLineIcons name="user-follow" size={32} color="black" />
            <View style={styles.redCircleContainer}>
              <View style={styles.redCircle}>
                <Text style={styles.numberStyle}>1</Text>
              </View>
            </View>
          </View>
        </Tap>
      </View>
      <View style={styles.patientCardContainer}>
        <PatientCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
        />
      </View>
    </View>
  );
}
function AcceptPatientList() {
  return (
    <View style={{flex:1,alignItems:"center",}}>
      <AcceptListCard
        description={"ادرس خ ازادی خ ازادی ک ازادی"}
        id=""
        image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
        name="محمد سجاد سیف اله طرقی"
        date={"فلان تاریخ"}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();
export const Patients = observer(() => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={PatientList} />
      <Stack.Screen name="Details" component={AcceptPatientList} />
    </Stack.Navigator>
  );
});
