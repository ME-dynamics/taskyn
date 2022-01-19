import React, { useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TaskynIcon, Container, IconButton, Scroller } from "../../../library";
import { TestResultHistoryCard, TextIcon } from "../../components";

import { styles, iconButtonColor } from "./styles";

function TestHistoryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Container>
      <View style={styles.categoryContainer}>
        <IconButton
          Icon={() => (
            <TaskynIcon name={"filter"} size={24} color={iconButtonColor} />
          )}
          onPress={() => {}}
        />
        <View style={styles.line} />
      </View>
      <Scroller contentContainerStyle={styles.historyCardScroller}>
        <TestResultHistoryCard
          id={"1"}
          Icon={() => <TextIcon label={"mbti"} labelColor={"red"} />}
          title={"MBTI"}
          answer={"INTJ"}
          date={"1376/06/06"}
        />
        <TestResultHistoryCard
          id={"2"}
          Icon={() => <TextIcon label={"mbti"} labelColor={"red"} />}
          title={"MBTI"}
          answer={"INTJ"}
          date={"1376/06/06"}
        />
      </Scroller>
    </Container>
  );
}

export const TestHistory = observer(TestHistoryScreen);
