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
import { useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { retrieveCustomers } from "../../usecases/retriveCustomer";
function DashboardScreen() {
  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const isProvider = getRole() === "provider";
  const isCustomer = getRole() === "customer";
  async function init() {
    if (isCustomer) {
      await retrieveProvider();
      return;
    }
    if (isProvider) {
      // @ts-expect-error
      await retrieveCustomers(route.params?.id);
    }
  }
  function renderUserCard() {
    if (isCustomer) {
      return (
        <UserCard
          id={dashboardState.provider?.id || ""}
          name={dashboardState.provider?.name || ""}
          description={dashboardState.provider?.description || ""}
          role={"customer"}
          imageUrl={dashboardState.provider?.profilePictureUrl || ""}
        />
      );
    }
    if (isProvider) {
      return (
        <UserCard
          id={dashboardState.customer?.id || ""}
          name={
            `${dashboardState.customer?.firstName} ${dashboardState.customer?.lastName}` ||
            ""
          }
          description={dashboardState.customer?.description || ""}
          imageUrl={dashboardState.customer?.profilePictureUrl || ""}
          role={"provider"}
        />
      );
    }
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <Container>
      <View style={styles.titleContainer}>{renderUserCard()}</View>
      <View style={styles.buttonContainer}>
        <Scroller contentContainerStyle={styles.containerContentStyle}>
          <View style={styles.row}>
            {isProvider ? (
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
            ) : (
              <Tile
                title={"تمرینات"}
                Icon={({ size, color }) => {
                  return (
                    <TaskynIcon
                      name={"practice"}
                      color={color}
                      size={size}
                      svg
                    />
                  );
                }}
                onPress={() => {
                  navigation.push("tasks");
                }}
              />
            )}

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
            {isProvider ? (
              <Tile
                title={"تاریخچه تست ها"}
                Icon={({ size, color }) => {
                  return (
                    <TaskynIcon name={"form"} color={color} size={size} svg />
                  );
                }}
                onPress={() => {
                  // navigation.push("form");
                }}
              />
            ) : (
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
            )}
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
          {isProvider ? (
            <View style={styles.row}>
              <Tile
                title={"تمرینات"}
                Icon={({ size, color }) => {
                  return (
                    <TaskynIcon
                      name={"practice"}
                      color={color}
                      size={size}
                      svg
                    />
                  );
                }}
                onPress={() => {
                  navigation.push("tasks");
                }}
              />
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
            </View>
          ) : null}
        </Scroller>
      </View>
    </Container>
  );
}

export const Dashboard = observer(DashboardScreen);
