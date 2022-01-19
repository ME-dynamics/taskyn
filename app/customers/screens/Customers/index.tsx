import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import {
  SearchBar,
  Touchable,
  Title,
  TaskynIcon,
  Subheading,
  Container,
  Scroller,
} from "../../../library";

import { requestCount, retrieveRequests } from "../../../requests";

import { CustomerCard } from "../../components";
import { retrieveCustomers } from "../../usecases";

import { styles } from "./styles";

function CustomersScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    Promise.all([retrieveCustomers(), retrieveRequests()]);
  }, []);

  return (
    <Container>
      <View style={styles.titleContainer}>
        <Title>{"لیست مراجعین"}</Title>
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar onChangeText={() => {}} value={""} placeholder={""} />
      </View>
      <View style={styles.requestContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.redCircleContainer}>
            <View style={styles.redCircle}>
              <Text style={styles.numberStyle}>
                {digitsEnToFa(requestCount())}
              </Text>
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
            navigation.push("customerRequests");
          }}
          rippleColor={"grey"}
        />
      </View>
      <View style={styles.line} />

      <Scroller>
        <CustomerCard
          id={"sd"}
          description={"مشسیم"}
          profileImageUrl={
            "https://cdn01.zoomit.ir/Avatars//ef71899b-b0fc-4c3b-984e-5a41e450d942.png?w=115"
          }
          fullName={"سجاد سیف اله"}
          onPress={(id) => {
            console.log("customer pressed", { customerId: id });
          }}
        />
        <CustomerCard
          id={"sd"}
          description={"مشسیم"}
          profileImageUrl={
            "https://cdn01.zoomit.ir/Avatars//ef71899b-b0fc-4c3b-984e-5a41e450d942.png?w=115"
          }
          fullName={"سجاد سیف اله"}
          onPress={(id) => {
            console.log("customer pressed", { customerId: id });
          }}
        />
      </Scroller>
    </Container>
  );
}
export const Customers = observer(CustomersScreen);
