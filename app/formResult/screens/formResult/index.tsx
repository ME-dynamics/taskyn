import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  Button,
  IconButton,
  THEME,
  Touchable,
  TaskynIcon,
} from "../../../library";
import { tMode } from "../../../library/Button/types";
import { CategoryComponent } from "../../components/category";
import { FormCard } from "../../components/formCard";
import { ResultTile } from "../../components/resultTile";
import { styles } from "./styles";

export function FormResult() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [mode, setMode] = useState<tMode>("contained");
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <Button
          Icon={() => <TaskynIcon name={"filter"} size={24} color={"red"} />}
          mode={"text"}
          size={"small"}
          rippleColor={"lightGrey"}
        >
          {"همه تست ها"}
        </Button>
        <View style={styles.line} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.resultTileContainer}>
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="medium-m" size={size} color={color} />
            )}
            title={"MBTI"}
            answer={"INTJ"}
            date={"1376/06/06"}
          />
          <FormCard
            Icon={({ color, size }) => (
              <FontAwesome5 name="medium-m" size={size} color={color} />
            )}
            title={"MBTI"}
            answer={"INTJ"}
            date={"1376/06/06"}
          />
        </View>
        <Touchable
          rippleColor={"lightGrey"}
          onPress={() => {
            navigation.push("MbtiResult");
          }}
        />
      </ScrollView>
    </View>
  );
}
