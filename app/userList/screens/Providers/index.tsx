import React, { useEffect } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SearchBar, Container, Scroller, Title } from "../../../library";
import { UserCard } from "../../components";
import { providersState } from "../../entities";
import { retrieveProviders, retrieveRequest } from "../../usecases";
import { styles } from "./styles";

const image =
  "https://cdn01.zoomit.ir/2021/12/iran-national-network.jpg?w=1300";

function ProvidersScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useEffect(() => {
    async function prepare() {
      await Promise.all([retrieveProviders(), retrieveRequest()]);
    }
    prepare();
  }, []);
  function renderProviderList() {
    const providers: JSX.Element[] = [];
    for (let index = 0; index < providersState.providers.length; index++) {
      const { id, description, firstName, lastName, profilePictureUrl, role } =
        providersState.providers[index];
      providers.push(
        <UserCard
          key={id}
          id={id}
          mode={"providers"}
          fullName={`${firstName} ${lastName}`}
          description={description || ""}
          profileImageUrl={image || ""}
        />
      );
    }
    return providers;
  }
  return (
    <Container>
      <View style={styles.searchContainer}>
        <SearchBar
          onChangeText={() => {}}
          // onClear={() => {}}
          value={""}
          placeholder={""}
        />
      </View>
      <View style={styles.doctorListContainer}>
        <Scroller>{renderProviderList()}</Scroller>
      </View>
      <View style={styles.requestContainer}>
        <View style={styles.horizontalLine} />
        <Title style={styles.myDoctorTitle}>{"دکتر من"}</Title>
        <UserCard
          mode={"myProvider"}
          id={providersState.myProvider?.id || ""}
          fullName={`${providersState.myProvider?.firstName} ${providersState.myProvider?.lastName}`}
          description={providersState.myProvider?.description || "دکتر نیست"}
          profileImageUrl={
            "https://cdn01.zoomit.ir/Avatars//ef71899b-b0fc-4c3b-984e-5a41e450d942.png?w=115"
          }
        />
      </View>
    </Container>
  );
}

export const Providers = observer(ProvidersScreen);
