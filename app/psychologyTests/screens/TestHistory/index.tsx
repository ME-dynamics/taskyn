import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TaskynIcon, Container, IconButton, Scroller } from "../../../library";
import { TestResultHistoryCard, TextIcon } from "../../components";

import { styles, iconButtonColor } from "./styles";
import { retiriveTestHistory } from "../../usecases";
import { mbtiState, testHistoryState } from "../../entities";

function TestHistoryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  function renderTestResultCard() {
    const result: JSX.Element[] = [];
    for (let index = 0; index < testHistoryState.testHistory.length; index++) {
      const { createdAt, description, id, title } =
        testHistoryState.testHistory[index];
      result.push(
        <TestResultHistoryCard
          key={id}
          id={id}
          Icon={() => <TextIcon label={title} labelColor={"red"} />}
          title={title}
          description={description}
          date={createdAt}
          onPress={() => {
            //@ts-expect-error
            mbtiState.setMbtiResult(testHistoryState.testHistory[index].result); //TODO: remove this line
            navigation.push("mbtiResult");
          }}
        />
      );
    }
    return result;
  }
  async function init() {
    await retiriveTestHistory("");
  }
  useEffect(() => {
    init();
  }, []);

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
        {renderTestResultCard()}
      </Scroller>
    </Container>
  );
}

export const TestHistory = observer(TestHistoryScreen);
