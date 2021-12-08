import React from "react";
import { Text, View } from "react-native";
import { SearchBar, Touchable, Title, Tap, Subheading } from "../../../library";
import { styles } from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UserList } from "../../components/UserList";

export function DoctorList() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title>{"لیست دکترها"}</Title>
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar
          onChangeText={() => {}}
          onClear={() => {}}
          value={""}
          placeholder={""}
        />
      </View>

      <KeyboardAwareScrollView style={styles.scrolViewContainer}>
        <View style={styles.doctorsCardContainer}>
          <UserList name={"سجاد سیف اله"} mode={"request"} />
          <UserList name={"سجاد سیف اله"} mode={"request"} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
// export const Patients = observer(PatientList);
