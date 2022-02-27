import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import {
  SearchBar,
  Title,
  Subheading,
  Container,
  Scroller,
} from "../../../library";
import { customerState } from "../../entities";
import { CustomerCard, RequestCard } from "../../components";
import { styles } from "./styles";
import { retrieveCustomers } from "../../usecases";
import { useIsFocused } from "@react-navigation/native";

function CustomersScreen() {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState<boolean>(true);
  async function init() {
    await retrieveCustomers();
    setLoading(false);
  }
  useEffect(() => {
    if (isFocused) {
      init();
    }
  }, [isFocused]);
  function renderCustomers() {
    const customers: JSX.Element[] = [];
    const length = customerState.customers.length;
    if (length === 0) {
      // TODO: convert styles to inline styles
      return (
        <Subheading
          style={styles.noCustomersFound}
        >
          {"مراجعی یافت نشد!"}
        </Subheading>
      );
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
      <RequestCard />
      <View style={styles.line} />
      <Scroller>{renderCustomers()}</Scroller>
    </Container>
  );
}
export const Customers = observer(CustomersScreen);
