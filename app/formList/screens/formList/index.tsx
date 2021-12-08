//@ts-nocheck
import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { FormCard } from "../../components/formCard";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { SearchBar, Container, Title } from "../../../library";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
export function FormList() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Container>
      <View style={styles.searchBarContainer}>
        <SearchBar
          onChangeText={() => {}}
          onClear={() => {}}
          value={""}
          placeholder=""
        />
      </View>
      <View style={styles.formHistoryContainer}>
        <FormCard
          Icon={({ color, size }) => (
            <FontAwesome5 name="medium-m" size={size} color={color} />
          )}
          id={"Neo"}
          englishName={"Myers–Briggs Type Indicator"}
          persianName={"تاریخچه تست"}
          onPress={() => {
            navigation.push("FormDetails");
          }}
        />
        <View style={styles.line} />
        <View style={styles.title}>
          <Title>{"لیست تست ها"}</Title>
        </View>
      </View>
      <View style={styles.formCardContainer}>
        <KeyboardAwareScrollView
          style={styles.container}
          contentContainerStyle={styles.containerContentStyle}
          scrollEnabled={true}
        >
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="medium-m" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"Myers–Briggs Type Indicator"}
            persianName={"تاریخچه تست"}
            onPress={() => {
              navigation.push("FormDetails");
            }}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="medium-m" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"Myers–Briggs Type Indicator"}
            persianName={"تاریخچه تست"}
            onPress={() => {
              navigation.push("FormDetails");
            }}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="medium-m" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"Myers–Briggs Type Indicator"}
            persianName={"تاریخچه تست"}
            onPress={() => {
              navigation.push("FormDetails");
            }}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="medium-m" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"Myers–Briggs Type Indicator"}
            persianName={"تاریخچه تست"}
            onPress={() => {
              navigation.push("FormDetails");
            }}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="medium-m" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"Myers–Briggs Type Indicator"}
            persianName={"تاریخچه تست"}
            onPress={() => {
              navigation.push("FormDetails");
            }}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="medium-m" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"Myers–Briggs Type Indicator"}
            persianName={"تاریخچه تست"}
            onPress={() => {
              navigation.push("FormDetails");
            }}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="medium-m" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"Myers–Briggs Type Indicator"}
            persianName={"تاریخچه تست"}
            onPress={() => {
              navigation.push("FormDetails");
            }}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="medium-m" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"Myers–Briggs Type Indicator"}
            persianName={"تاریخچه تست"}
            onPress={() => {
              navigation.push("FormDetails");
            }}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="medium-m" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"Myers–Briggs Type Indicator"}
            persianName={"تست MBTI"}
            onPress={() => {
              navigation.push("FormDetails");
            }}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="medium-m" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"Myers–Briggs Type Indicator"}
            persianName={"تست MBTI"}
            onPress={() => {
              navigation.push("FormDetails");
            }}
          />
        </KeyboardAwareScrollView>
      </View>
    </Container>
  );
}
