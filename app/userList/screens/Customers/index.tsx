import React from "react";
import { Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import {
  SearchBar,
  Touchable,
  Title,
  TaskynIcon,
  Subheading,
  Container,
  Scroller,
} from "../../../library";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UserCard } from "../../components";

function CustomersScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

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
              <Text style={styles.numberStyle}>1</Text>
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
            navigation.push("AcceptPatientList");
          }}
          rippleColor={"grey"}
        />
      </View>
      <View style={styles.line} />

      <Scroller>
        <UserCard
          id={"sd"}
          description={"مشسیم"}
          profileImageUrl={
            "https://cdn01.zoomit.ir/Avatars//ef71899b-b0fc-4c3b-984e-5a41e450d942.png?w=115"
          }
          fullName={"سجاد سیف اله"}
          mode={"customers"}
        />
        <UserCard
          id={"sd"}
          description={"مشسیم"}
          profileImageUrl={
            "https://cdn01.zoomit.ir/Avatars//ef71899b-b0fc-4c3b-984e-5a41e450d942.png?w=115"
          }
          fullName={"سجاد سیف اله"}
          mode={"customers"}
        />
      </Scroller>
    </Container>
  );
}
export const Customers = observer(CustomersScreen);
