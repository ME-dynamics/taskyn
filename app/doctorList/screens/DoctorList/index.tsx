import React, { useEffect } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SearchBar, Container, Scroller, Title } from "../../../library";
import { DoctorCard } from "../../components";
import { doctorsState } from "../../entities";
import { retrieveProviders, retrieveRequest } from "../../usecases";
import { styles } from "./styles";

const image =
  "https://cdn01.zoomit.ir/2021/12/iran-national-network.jpg?w=1300";

function DoctorListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useEffect(() => {
    async function prepare() {
      await Promise.all([retrieveProviders(), retrieveRequest()]);
    }
    prepare();
  }, []);
  function renderDoctorList() {
    const doctors: JSX.Element[] = [];
    for (let index = 0; index < doctorsState.doctors.length; index++) {
      const { id, description, firstName, lastName } =
        doctorsState.doctors[index];
      doctors.push(
        <DoctorCard
          key={id}
          id={id}
          mode={"doctors"}
          fullName={`${firstName} ${lastName}`}
          description={description || ""}
          profileImageUrl={image || ""}
        />
      );
    }
    return doctors;
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
        <Scroller>{renderDoctorList()}</Scroller>
      </View>
      <View style={styles.requestContainer}>
        <View style={styles.horizontalLine} />
        <Title style={styles.myDoctorTitle}>{"دکتر من"}</Title>

        <DoctorCard
          key={doctorsState.myDoctor?.id}
          mode={"myDoctor"}
          id={doctorsState.myDoctor?.id || ""}
          fullName={`${doctorsState.myDoctor?.firstName} ${doctorsState.myDoctor?.lastName}`}
          description={doctorsState.myDoctor?.description || ""}
          profileImageUrl={
            "https://cdn01.zoomit.ir/2021/12/iran-national-network.jpg?w=1300"
          }
        />
      </View>
    </Container>
  );
}

export const DoctorList = observer(DoctorListScreen);
