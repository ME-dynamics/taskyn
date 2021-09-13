import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { AcceptListCard } from "../components/AcceptListCard";
import { SearchBar, colors , Touchable } from "../../library";
import { MaterialCommunityIcons, FontAwesome5, Octicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { styles } from "./styles";
import { PatientCard } from "../components/PatientCard";

function AcceptListCardTap() {
  return (
    <View>
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

function PatientCardTap() {
  return (
    <View>
      <PatientCard
        description={"ادرس خ ازادی خ ازادی ک ازادی"}
        id=""
        image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
        name="محمد سجاد سیف اله طرقی"
        date={"فلان تاریخ"}
      />
    </View>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="accept list"
      screenOptions={{
        tabBarActiveTintColor: colors.primaryPurple,
        tabBarItemStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        name="accept list"
        component={PatientCardTap}
        options={{
          tabBarLabel: "accept list",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="patient list"
        component={AcceptListCardTap}
        options={{
          tabBarLabel: "patient list",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard-list" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Tab = createMaterialTopTabNavigator();

export const Patients = observer(() => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          onChangeText={() => {}}
          onClear={() => {}}
          value={""}
          placeholder=""
          
        />
        <View style={styles.iconContainer}>
        <Octicons name="request-changes" size={40} color="black" />
        <Touchable onPress={()=>{}} rippleColor={"lightGrey"}  />
        </View>
      </View>
      <View style={styles.patientCardContainer}>
      <PatientCard
        description={"ادرس خ ازادی خ ازادی ک ازادی"}
        id=""
        image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
        name="محمد سجاد سیف اله طرقی"
        date={"فلان تاریخ"}
      />
      </View>
    </View>
  );
});
