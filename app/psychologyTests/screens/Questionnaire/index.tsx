import React, { useCallback } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Container, Scroller, Title } from "../../../library";

import { ChoicesList, QuestionNavigator } from "../../components";
import { testDetailState, questionnaireState } from "../../entities";
import { onNextQuestion, onPrevQuestion } from "../../usecases";

import { styles } from "./styles";
function QuestionnaireScreen() {
  const navigator = useNavigation<NativeStackNavigationProp<any>>();

  const nextQuestion = useCallback(onNextQuestion, [
    questionnaireState.currentQuestion,
  ]);
  const prevQuestion = useCallback(onPrevQuestion, [
    questionnaireState.currentQuestion,
  ]);
  function formatTitle() {
    return (
      digitsEnToFa(questionnaireState.currentQuestion) +
      "- " +
      testDetailState.test.fields[`${questionnaireState.currentQuestion}`]
        .question
    );
  }
  return (
    <Container>
      <View style={styles.questionContainer}>
        <Title>{formatTitle()}</Title>
      </View>
      <View style={styles.answerCardsScrollView}>
        <Scroller>
          <ChoicesList />
        </Scroller>
      </View>
      <QuestionNavigator
        currentQuestion={questionnaireState.currentQuestion}
        totalQuestionSize={testDetailState.fieldSize}
        nextQuestion={nextQuestion}
        prevQuestion={prevQuestion}
        onSubmit={() => {}}
      />
    </Container>
  );
}

export const Questionnaire = observer(QuestionnaireScreen);
