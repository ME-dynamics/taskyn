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

function CustomersScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  async function init() {
    await retrieveCustomers();
    setLoading(false);
  }
  useEffect(() => {
    init();
  }, []);
  function renderCustomers() {
    const customers: JSX.Element[] = [];
    const length = customerState.customers.length;
    if (length === 0) {
      // TODO: convert styles to inline styles
      return (
        <Subheading style={{ width: "100%", marginTop: 64, textAlign: "center" }}>
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
