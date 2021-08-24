import React from "react";
import { View } from "react-native";
import { PatientCard } from "../components/PatientCart";
import { search } from '../../l'
export default function index() {
  return (
    <View>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Search/>
      <PatientCard
        name="سجاد سیف اله"
        onPress={() => "hi"}
        image="https://bootdey.com/img/Content/avatar/avatar7.png"
        description="افسردگی ، مشکل اعصاب ، 25 جلسه ، تست ibtm افسردگی ، مشکل اعصاب ، 25 جلسه ، تست ibtm"
      />
    </View>
  );
}
