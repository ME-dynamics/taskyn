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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native-gesture-handler";

export function PatientList({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          onChangeText={() => {}}
          onClear={() => {}}
          value={""}
          placeholder=""
        />
        <Tap onPress={() => navigation.push("AcceptPatientList")}>
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
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.patientCardContainer}>
          <PatientCard
            description={"ادرس خ ازادی خ ازادی ک ازادی"}
            id=""
            image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
            name="محمد سجاد سیف اله طرقی"
          />
          <PatientCard
            description={"ادرس خ ازادی خ ازادی ک ازادی"}
            id=""
            image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
            name="محمد سجاد سیف اله طرقی"
          />
          <PatientCard
            description={"ادرس خ ازادی خ ازادی ک ازادی"}
            id=""
            image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
            name="محمد سجاد سیف اله طرقی"
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
export function AcceptPatientList() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <AcceptListCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
          date={"فلان تاریخ"}
        />
        <AcceptListCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
          date={"فلان تاریخ"}
        />
        <AcceptListCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
          date={"فلان تاریخ"}
        />
        <AcceptListCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
          date={"فلان تاریخ"}
        />
        <AcceptListCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
          date={"فلان تاریخ"}
        />
        <AcceptListCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
          date={"فلان تاریخ"}
        />
        <AcceptListCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
          date={"فلان تاریخ"}
        />
        <AcceptListCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
          date={"فلان تاریخ"}
        />
        <AcceptListCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
          date={"فلان تاریخ"}
        />
        <AcceptListCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
          date={"فلان تاریخ"}
        />
        <AcceptListCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
          date={"فلان تاریخ"}
        />
      </View>
    </ScrollView>
  );
}
// export const Patients = observer(PatientList);