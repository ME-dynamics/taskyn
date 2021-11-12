import React from "react";
import { Text, View } from "react-native";
import { AcceptListCard } from "../../components/AcceptListCard";
import { ScrollView } from "react-native-gesture-handler";

export function AcceptPatientList() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <AcceptListCard
          description={"ادرس خ ازادی خ ازادی ک ازادی"}
          id=""
          image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
          name="محمد سجاد سیف اله طرقی"
        />
      </View>
    </ScrollView>
  );
}
