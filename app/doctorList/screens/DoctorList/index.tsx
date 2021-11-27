import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SearchBar, Tap } from "../../../library";
import { DoctorCard } from "../../components/DoctorCard";
import { styles } from "./styles";
export function DoctorList() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          onChangeText={() => {}}
          onClear={() => {}}
          value={""}
          placeholder={""}
        />
      </View>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.doctorCardContainer}>
          <DoctorCard
            description={"ادرس خ ازادی خ ازادی ک ازادی"}
            id=""
            image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
            name="محمد سجاد سیف اله طرقی"
          />
          <DoctorCard
            description={"ادرس خ ازادی خ ازادی ک ازادی"}
            id=""
            image={"https://bootdey.com/img/Content/avatar/avatar7.png"}
            name="محمد سجاد سیف اله طرقی"
          />
          <DoctorCard
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
