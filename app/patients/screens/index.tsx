import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite"
import { PatientCard } from "../components/PatientCard";
// import { Se } from '../../library'


export const Patients = observer(() => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    {/* <Search/> */}
      <PatientCard
        name="سجاد سیف اله"
        onPress={() => "hi"}
        image="https://bootdey.com/img/Content/avatar/avatar7.png"
        description="افسردگی ، مشکل اعصاب ، 25 جلسه ، تست ibtm افسردگی ، مشکل اعصاب ، 25 جلسه ، تست ibtm"
      />
    </View>
  );
})
