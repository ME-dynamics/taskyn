import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { DoctorList } from "../app/doctorList";
import { UserInfo } from "../app/userInfo";
import { Note } from "../app/note";
import { Tasks } from "../app/task";
import { Dashboard } from "../app/dashboard";

import { PatientList } from "../app/patients";
import { AcceptPatientList } from "../app/patients/screens/acceptPtaientList";

const DashboardStack = createNativeStackNavigator();

function ProviderDashboardNavigation() {
  return (
    <DashboardStack.Navigator initialRouteName={"patients"}>
      <DashboardStack.Screen
        name={"patients"}
        options={{ headerShown: false }}
        component={PatientList}
      />
      <DashboardStack.Screen
        name={"acceptPatients"}
        options={{ headerShown: false }}
        component={AcceptPatientList}
      />

      <DashboardStack.Screen
        name={"dashboard"}
        options={{ headerShown: false }}
        component={Dashboard}
      />
      <DashboardStack.Screen name={"doctorList"} component={DoctorList} />
      <DashboardStack.Screen name={"userInfo"} component={UserInfo} />
      <DashboardStack.Screen name={"tasks"} component={Tasks} />

      <DashboardStack.Screen name={"notes"} component={Note} />
    </DashboardStack.Navigator>
  );
}

export const ProviderDashboardNav = observer(ProviderDashboardNavigation);
