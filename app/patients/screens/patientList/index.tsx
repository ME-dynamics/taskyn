import React from "react";
import { Text, View } from "react-native";
import { SearchBar, Touchable, Title, Tap, Subheading } from "../../../library";
import { Octicons, SimpleLineIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UserList } from "../../components/UserList";
import { TaskynIcon } from "../../../library";

export function PatientList() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title>{"لیست بیماران"}</Title>
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar onChangeText={() => {}} value={""} placeholder={""} />
      </View>
      <View style={styles.requestContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.redCircleContainer}>
            <View style={styles.redCircle}>
              <Text style={styles.numberStyle}>1</Text>
            </View>
          </View>
          <View style={styles.icon}>
            <TaskynIcon name={"users"} color={"red"} size={24} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.title}>
            <Subheading>{"درخواست ها"}</Subheading>
          </View>
        </View>
        <Touchable
          onPress={() => {
            navigation.push("AcceptPatientList");
          }}
          rippleColor={"grey"}
        />
      </View>
      <View style={styles.line} />

      <KeyboardAwareScrollView style={styles.scrolViewContainer}>
        <View style={styles.patientCardContainer}>
          <UserList name={"سجاد سیف اله"} mode={"request"} />
          <UserList name={"سجاد سیف اله"} mode={"reject"} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
// export const Patients = observer(PatientList);
