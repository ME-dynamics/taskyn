//@ts-nocheck
import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { FormCard } from "../components";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { SearchBar } from "../../library";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native-gesture-handler";
export const FormList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          onChangeText={() => {}}
          onClear={() => {}}
          value={""}
          placeholder=""
        />
      </View>

      <View style={styles.formCardContainer}>
        <KeyboardAwareScrollView
          style={styles.container}
          contentContainerStyle={styles.containerContentStyle}
        >
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="neos" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"NEO Personality Inventory"}
            persianName={"پرسش نامه شخصیتی نئو"}
            onPress={() => {}}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="neos" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"NEO Personality Inventory"}
            persianName={"پرسش نامه شخصیتی نئو"}
            onPress={() => {}}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="neos" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"NEO Personality Inventory"}
            persianName={"پرسش نامه شخصیتی نئو"}
            onPress={() => {}}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="neos" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"NEO Personality Inventory"}
            persianName={"پرسش نامه شخصیتی نئو"}
            onPress={() => {}}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="neos" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"NEO Personality Inventory"}
            persianName={"پرسش نامه شخصیتی نئو"}
            onPress={() => {}}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="neos" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"NEO Personality Inventory"}
            persianName={"پرسش نامه شخصیتی نئو"}
            onPress={() => {}}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="neos" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"NEO Personality Inventory"}
            persianName={"پرسش نامه شخصیتی نئو"}
            onPress={() => {}}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="neos" size={size} color={color} />
            )}
            id={"Neo"}
            englishName={"NEO Personality Inventory"}
            persianName={"پرسش نامه شخصیتی نئو"}
            onPress={() => {}}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};
