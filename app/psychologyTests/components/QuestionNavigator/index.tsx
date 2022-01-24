import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Button, Paragraph } from "../../../library";

import { questionnaireState, testDetailState } from "../../entities";
import { onNextQuestion, onPrevQuestion, onTestSubmit } from "../../usecases";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

function QuestionNavigatorComponent() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const isFirst = questionnaireState.currentQuestion === 1;
  const finished =
    questionnaireState.currentQuestion === testDetailState.fieldSize;
  const answered =
    questionnaireState.answers[`${questionnaireState.currentQuestion}`];
  async function onNextPress() {
    if (finished) {
      await onTestSubmit();
      navigation.push("mbtiResult");
      return;
    }
    onNextQuestion();
  }

  function nextButtonText() {
    if (finished) {
      return "دیدن نتیجه";
    }
    return "بعدی";
  }
  return (
    <View style={styles.container}>
      <Button
        mode={"contained"}
        rippleColor={"lightGrey"}
        size={"small"}
        disabled={isFirst}
        onPress={onPrevQuestion}
      >
        {"قبلی"}
      </Button>
      <Paragraph>
        <Paragraph style={styles.questionNumber}>
          {digitsEnToFa(questionnaireState.currentQuestion)}
        </Paragraph>
        {" از "}
        <Paragraph style={styles.questionNumber}>
          {digitsEnToFa(testDetailState.fieldSize)}
        </Paragraph>
      </Paragraph>
      <Button
        mode={finished ? "contained-secondary" : "contained"}
        rippleColor={"lightGrey"}
        size={"small"}
        onPress={onNextPress}
        disabled={!answered}
      >
        {nextButtonText()}
      </Button>
    </View>
  );
}

export const QuestionNavigator = observer(QuestionNavigatorComponent);
