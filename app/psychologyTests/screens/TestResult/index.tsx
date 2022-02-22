import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Container } from "../../../library";
import {
  styles,
  errorColor,
  facetColor,
  factorColor,
  warningColor,
} from "./styles";
import { TestResultCard } from "../../components";
import { testResultState } from "../../entities";
import { retrieveTestResult } from "../../usecases";
export function TestResultScreen() {
  async function init() {
    await retrieveTestResult();
  }
  function typeToColor(value: string) {
    switch (value) {
      case "factor":
        return factorColor;
      case "error":
        return errorColor;
      case "warning":
        return warningColor;
      case "facet":
        return facetColor;
      default:
        return "#ffffff";
    }
  }
  function renderTestResult() {
    const result: JSX.Element[] = [];
    const length = testResultState.testResult.length;
    for (let index = 0; index < length; index++) {
      const element = testResultState.testResult[index];
      result.push(
        <TestResultCard
          faName={element.faName}
          enName={element.enName}
          variable={element.variable}
          rawScore={element.rawScore}
          baseRate={element.baseRate}
          sideColor={typeToColor(element.type)}
          interpret={element.interpret}
        />
      );
    }
  }

  useEffect(() => {
    //  init();
  }, []);

  return (
    <Container>
      <View style={styles.cardContainer}>
        {/* {renderTestResult()} */}
        <TestResultCard
          faName={"دروغ"}
          enName={"lie"}
          variable={"l".toUpperCase()}
          rawScore={12}
          baseRate={15}
          sideColor={"red"}
          interpret={"ضعیف"}
        />
        <TestResultCard
          faName={"اسکیزوئید"}
          enName={"Schizoid"}
          variable={"1"}
          rawScore={12}
          baseRate={15}
          sideColor={"blue"}
          interpret={"ضعیف"}
        />
        <TestResultCard
          faName={"تست میلون"}
          enName={"MMCI"}
          variable={"l"}
          rawScore={12}
          baseRate={15}
          sideColor={"green"}
          interpret={"ضعیف"}
        />
      </View>
    </Container>
  );
}

export const TestResult = observer(TestResultScreen);
