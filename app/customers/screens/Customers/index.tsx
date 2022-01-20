import React, { useEffect, useState } from "react";
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
import { customerState } from "../../entities";
import { CustomerCard } from "../../components";
import { styles } from "./styles";
import { retrieveCustomers } from "../../usecases/retrieveCustomers";

function CustomersScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [loading, setLoading] = useState<boolean>(true);
  async function init() {
    await Promise.all([retrieveCustomers(), retrieveRequests()]);
    setLoading(false);
  }
  useEffect(() => {
    init();
  }, []);
  function renderCustomers() {
    const customers: JSX.Element[] = [];
    const length = customerState.customers.length;
    if (length === 0) {
      return <Subheading>{"مریضی یافت نشد!"}</Subheading>;
    }
    for (let index = 0; index < length; index++) {
      const { customerId, description, name, profilePictureUrl, createdAt } =
        customerState.customers[index];
      customers.push(
        <CustomerCard
          key={customerId}
          description={description}
          fullName={name}
          id={customerId}
          profileImageUrl={profilePictureUrl}
          date={createdAt}
          onPress={() => {}}
        />
      );
    }
    return customers;
  }
  return (
    <Container loading={loading}>
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
            navigation.push("requests");
          }}
          rippleColor={"grey"}
        />
      </View>
      <View style={styles.line} />

      <Scroller>{renderCustomers()}</Scroller>
    </Container>
  );
}
export const Customers = observer(CustomersScreen);
