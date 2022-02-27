import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Container, Scroller } from "../../../library";
import { styles } from "./styles";
import { TestResultCard } from "../../components";
import { testResultState } from "../../entities";
import { retrieveTestResult } from "../../usecases";
import { useRoute } from "@react-navigation/native";
export function TestResultScreen() {
  const route = useRoute();
  //@ts-ignore
  const mode = route.params?.mode || "";
  const isTestHistory = mode === "testHistory";
  const [loading, setLoading] = useState(isTestHistory);

  //@ts-ignore
  const id = route.params?.id || "";
  async function init() {
    // console.log(id);
    await retrieveTestResult(id);
    setLoading(false);
  }

  function renderTestResult() {
    const result: JSX.Element[] = [];
    const length = testResultState.testResult.length;
    for (let index = 0; index < length; index++) {
      const element = testResultState.testResult[index];
      result.push(
        <TestResultCard
          key={element.variable}
          faName={element.faName}
          enName={element.enName}
          variable={element.variable}
          rawScore={element.rawScore}
          baseRate={element.baseRate}
          //@ts-ignore
          type={element.type}
          interpret={element.interpret}
        />
      );
    }
    console.log("result", result);
    return result;
  }

  useEffect(() => {
    if (isTestHistory) {
      // console.log(mode);
      init();
    }
  }, []);

  return (
    <Container loading={loading}>
      <Scroller
        style={styles.cardContainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {renderTestResult()}
      </Scroller>
    </Container>
  );
}

export const TestResult = observer(TestResultScreen);
