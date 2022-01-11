import React, { useEffect } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Container, Scroller, TaskynIcon } from "../../../library";
import { getRole } from "../../../authentication";
import { UserCard, Tile } from "../../components";
import { dashboardState } from "../../entities";
import { retrieveProvider } from "../../usecases";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
function DashboardScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const role = getRole();
  useEffect(() => {
    retrieveProvider();
  }, []);
  return (
    <Container>
      <View style={styles.titleContainer}>
        <UserCard
          id={dashboardState.provider?.id || ""}
          name={role === "provider" ? "" : "دکتر انتخاب نکردید"}
          description={role ? "" : "نامشخص"}
          onPress={() => {
            navigation.push("providers");
          }}
          role={role}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Scroller contentContainerStyle={styles.containerContentStyle}>
          <View style={styles.row}>
            <Tile
              title={"تمرینات"}
              Icon={({ size, color }) => {
                return (
                  <TaskynIcon name={"practice"} color={color} size={size} svg />
                );
              }}
              onPress={() => {
                navigation.push("tasks");
              }}
            />
            <Tile
              title={"پرونده بیمار"}
              Icon={({ size, color }) => {
                return (
                  <TaskynIcon name={"file"} color={color} size={size} svg />
                );
              }}
              onPress={() => {
                navigation.push("userInfo");
              }}
            />
          </View>
          <View style={styles.row}>
            <Tile
              title={"فرم ها"}
              Icon={({ size, color }) => {
                return (
                  <TaskynIcon name={"form"} color={color} size={size} svg />
                );
              }}
              onPress={() => {
                navigation.push("form");
              }}
            />
            <Tile
              title={"تاریخچه فرم ها"}
              Icon={({ size, color }) => {
                return (
                  <TaskynIcon
                    name={"file-history"}
                    color={color}
                    size={size}
                    svg
                  />
                );
              }}
              onPress={() => {
                navigation.push("formsHistory");
              }}
            />
          </View>
          {role === "provider" ? (
            <View style={styles.row}>
              <Tile
                title={"نوت برداری"}
                Icon={({ size, color }) => {
                  return (
                    <TaskynIcon name={"note"} color={color} size={size} svg />
                  );
                }}
                onPress={() => {
                  navigation.push("notes");
                }}
              />
            </View>
          ) : null}
        </Scroller>
      </View>
    </Container>
  );
}

export const Dashboard = observer(DashboardScreen);
