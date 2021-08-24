import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { PatientCard } from "../components/PatientCard";
import { SearchBar } from "../../library";

import { styles } from "./styles";

export const Patients = observer(() => {
  return (
    <View style={styles.container}>
      <SearchBar
        value={""}
        onChangeText={() => {}}
        onClear={() => {}}
        placeholder={"بیمار خود را اینجا سرچ کنید"}
      />
      <PatientCard
        name="سجاد سیف اله"
        onPress={() => "hi"}
        image="https://bootdey.com/img/Content/avatar/avatar7.png"
        description="افسردگی ، مشکل اعصاب ، 25 جلسه ، تست ibtm افسردگی ، مشکل اعصاب ، 25 جلسه ، تست ibtm"
      />
    </View>
  );
});
