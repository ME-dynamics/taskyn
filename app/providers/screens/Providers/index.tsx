import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  SearchBar,
  Container,
  Scroller,
  Title,
  Subheading,
} from "../../../library";
import { ProviderCard } from "../../components";
import { providerState } from "../../entities";
import { retrieveProviders, retrieveRequest } from "../../usecases";
import { styles } from "./styles";

const image =
  "https://cdn01.zoomit.ir/2021/12/iran-national-network.jpg?w=1300";

function ProvidersScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [loading, setLoading] = useState<boolean>(false);
  async function init() {
    setLoading(true);
    await Promise.all([retrieveProviders(), retrieveRequest()]);
    setLoading(false);
  }
  useEffect(() => {
    init();
  }, []);
  function renderProviderList() {
    const providers: JSX.Element[] = [];
    const length = providerState.providers.length;
    if (length === 0) {
      return <Subheading>{"دکتری پیدا نشد"}</Subheading>;
    }
    for (let index = 0; index < length; index++) {
      const { id, description, firstName, lastName, profilePictureUrl } =
        providerState.providers[index];
      providers.push(
        <ProviderCard
          key={id}
          id={id}
          fullName={`${firstName} ${lastName}`}
          description={description}
          profileImageUrl={profilePictureUrl}
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
        {providerState.myProvider ? <ProviderCard
          id={providerState.myProvider?.id || ""}
          fullName={`${providerState.myProvider?.firstName} ${providerState.myProvider?.lastName}`}
          description={providerState.myProvider?.description || "متخصص"}
          profileImageUrl={
            ""
          }
          // @ts-expect-error
          myDoctor
        />: <Subheading style={{textAlign: "center"}}>{"دکتری ثبت نشده است"}</Subheading>}
      </View>
    </Container>
  );
}

export const Providers = observer(ProvidersScreen);
