import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Container, logger, Scroller } from "../../../library";
import { styles } from "./styles";
import { TestResultCard } from "../../components";
import { testResultState } from "../../entities";
import { retrieveTestResult } from "../../usecases";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function TestResultScreen() {
  const route = useRoute();
  //@ts-ignore
  const mode = route.params?.mode || "";
  const isTestHistory = mode === "testHistory";
  const [loading, setLoading] = useState(isTestHistory);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  //@ts-ignore
  const testId = route.params?.testId || "";
  //@ts-ignore
  const customerId = route.params?.customerId || "";
  navigation.setOptions({
    headerRight: () => (
      <Button
        mode={"text"}
        size={"growWithText"}
        rippleColor={"lightGrey"}
        textColor={"white"}
        onPress={() => {
          navigation.push("chart");
        }}
        loading={loading}
      >
        {"نمودار"}
      </Button>
    ),
  });
  async function init() {
    // console.log(id);
    logger({
      container: "psychologyTests",
      path: { section: "screens", file: "TestResult" },
      type: "debug",
      logMessage: `test id is : ${testId}`,
    });
    await retrieveTestResult(testId, customerId);
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
    // console.log("result", result);
    return result;
  }

  useEffect(() => {
    if (isTestHistory) {
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
