import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { PatientCard } from "../components/PatientCard";
import { SearchBar } from "../../library";

import { styles } from "./styles";

export const Patients = observer(() => {
  return (
    <View style={styles.container}>
    <View style={styles.searchBarContainer}>
      <SearchBar
      onChangeText={()=>{}}
      onClear={()=>{}}
      value={""}
      placeholder=""
      
      />

    </View>
    <View style={styles.patientCardContainer}>
      <PatientCard
      description={"سیجاد سجاد شسشسذ خ ب"}
      id=""
      image={""}
      name="سجاد سیف اله"

            
      />
    </View>
    </View>
  );
});
