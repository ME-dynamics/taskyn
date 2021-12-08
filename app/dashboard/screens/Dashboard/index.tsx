import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import {
  FileIcon,
  FormHistoryIcon,
  FormIcon,
  NoteIcon,
  OnlineIcon,
} from "../../../library";
import { getRole } from "../../../authentication";
import { Card, Tile } from "../../components";
import { dashboardState } from "../../entities";
import { retrieveProvider } from "../../usecases";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
function DashboardScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const role = "cu";
  useEffect(() => {
    retrieveProvider();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.card}>
          <Card
            id={""}
            name={role === "provider" ? "" : "نامشخص"}
            description={role ? "" : "نامشخص"}
            onPress={() => {
              navigation.push("DoctorList");
            }}
            role={role}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ScrollView
          style={styles.scrollViewContainer}
          contentContainerStyle={styles.containerContentStyle}
        >
          <View style={styles.row}>
            <Tile
              title={"تمرینات"}
              Icon={({ size, color }) => {
                return <OnlineIcon size={size} />;
              }}
              onPress={() => {
                navigation.push("Task");
              }}
            />
            <Tile
              title={"پرونده بیمار"}
              Icon={({ size, color }) => {
                return <FileIcon size={size} />;
              }}
              onPress={() => {
                navigation.push("UserInfo");
              }}
            />
          </View>
          <View style={styles.row}>
            <Tile
              title={"فرم ها"}
              Icon={({ size, color }) => {
                return <FormIcon size={size} />;
              }}
              onPress={() => {
                navigation.push("Form");
              }}
            />
            <Tile
              title={"تاریخچه فرم ها"}
              Icon={({ size, color }) => {
                return <FormHistoryIcon size={size} />;
              }}
              onPress={() => {
                navigation.push("FormsHistory");
              }}
            />
          </View>
          {role === "provider" ? (
            <View style={styles.row}>
              <Tile
                title={"نوت برداری"}
                Icon={({ size, color }) => {
                  return <NoteIcon size={size} />;
                }}
                onPress={() => {
                  navigation.push("Note");
                }}
              />
            </View>
          ) : null}
        </ScrollView>
      </View>
    </View>
  );
}

export const Dashboard = observer(DashboardScreen);
