import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Container, Scroller } from "../../../library";
import { UserCard } from "../../components";
import { customerRequestState } from "../../entities";
import { retrieveProviderRequests } from "../../usecases";

export function CustomerRequestsScreen() {
  // const [loading, setLoading] = useState<boolean>(true);
  // async function prepare() {
  //   await retrieveProviderRequests();
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   prepare();
  // }, []);
  function renderCustomerRequests() {
    const components: JSX.Element[] = [];
    for (let index = 0; index < customerRequestState.requests.length; index++) {
      const {
        customerId,
        description,
        name,
        profilePictureUrl,
        providerId,
        requestConfirmed,
      } = customerRequestState.requests[index];
      components.push(
        <UserCard
          key={customerId}
          mode={"customerRequest"}
          id={customerId}
          fullName={name}
          description={description}
          profileImageUrl={profilePictureUrl}
        />
      );
    }
    return components;
  }
  return (
    <Container>
      <Scroller>{renderCustomerRequests()}</Scroller>
    </Container>
  );
}

export const CustomerRequests = observer(CustomerRequestsScreen);
