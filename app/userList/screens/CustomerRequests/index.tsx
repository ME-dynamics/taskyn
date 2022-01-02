import React from "react";
import { observer } from "mobx-react-lite";
import { Container, Scroller } from "../../../library";
import { UserCard } from "../../components";
export function CustomerRequestsScreen() {
  return (
    <Container>
      <Scroller>
        <UserCard
          key={"22"}
          mode={"customerRequest"}
          id={"id"}
          fullName={`${"عرفان"} ${"یوسفی فر"}`}
          description={"دکتر نیست"}
          profileImageUrl={
            "https://cdn01.zoomit.ir/Avatars//ef71899b-b0fc-4c3b-984e-5a41e450d942.png?w=115"
          }
        />
        <UserCard
          key={"123123"}
          mode={"customerRequest"}
          id={"id"}
          fullName={`${"عرفان"} ${"یوسفی فر"}`}
          description={"دکتر نیست"}
          profileImageUrl={
            "https://cdn01.zoomit.ir/Avatars//ef71899b-b0fc-4c3b-984e-5a41e450d942.png?w=115"
          }
        />
        <UserCard
          key={"213123"}
          mode={"customerRequest"}
          id={"id"}
          fullName={`${"عرفان"} ${"یوسفی فر"}`}
          description={"دکتر نیست"}
          profileImageUrl={
            "https://cdn01.zoomit.ir/Avatars//ef71899b-b0fc-4c3b-984e-5a41e450d942.png?w=115"
          }
        />
      </Scroller>
    </Container>
  );
}

export const CustomerRequests = observer(CustomerRequestsScreen);
