import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Button, Paragraph } from "../../../library";

import { styles } from "./styles";

import { IQuestionNavigatorProps } from "../../types";

function QuestionNavigatorComponent(props: IQuestionNavigatorProps) {
  const { currentQuestion, totalQuestionSize, nextQuestion, prevQuestion } =
    props;
  const isFirst = currentQuestion === 1;
  const finished = currentQuestion === totalQuestionSize;
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
        onPress={prevQuestion}
      >
        {"قبلی"}
      </Button>
      <Paragraph>
        <Paragraph style={styles.questionNumber}>
          {digitsEnToFa(currentQuestion)}
        </Paragraph>
        {" از "}
        <Paragraph style={styles.questionNumber}>
          {digitsEnToFa(totalQuestionSize)}
        </Paragraph>
      </Paragraph>
      <Button
        mode={finished ? "contained-secondary" : "contained"}
        rippleColor={"lightGrey"}
        size={"small"}
        onPress={nextQuestion}
      >
        {nextButtonText()}
      </Button>
    </View>
  );
}

export const QuestionNavigator = observer(QuestionNavigatorComponent);
