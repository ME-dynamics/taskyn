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
import ColorHash from "color-hash";

function TestHistoryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  function renderTestResultCard() {
    const result: JSX.Element[] = [];
    const colorHash = new ColorHash();
    for (let index = 0; index < testHistoryState.testHistory.length; index++) {
      const { createdAt, enName, faName, id, shortName } =
        testHistoryState.testHistory[index];

      const labelColor = colorHash.hex(shortName);

      result.push(
        <TestResultHistoryCard
          key={id}
          id={id}
          Icon={() => <TextIcon label={shortName} labelColor={labelColor} />}
          enName={enName}
          faName={faName}
          createdAt={createdAt}
          onPress={() => {
            navigation.push("testResultScreen", { id, mode: "testHistory" });
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
