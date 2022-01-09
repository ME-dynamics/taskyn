import React, { useCallback } from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Container, Scroller, Title } from "../../../library";

import { AnswerCard, QuestionNavigator } from "../../components";
import { testDetailState, questionnaireState } from "../../entities";
import { onSetAnswer, onNextQuestion, onPrevQuestion } from "../../usecases";

import { styles } from "./styles";
function QuestionnaireScreen() {
  const navigator = useNavigation<NativeStackNavigationProp<any>>();
  const setAnswer = useCallback(onSetAnswer, [
    questionnaireState.currentQuestion,
  ]);
  // TODO: move list to dedicated component
  function renderChoices() {
    const choices =
      testDetailState.test.fields[`${questionnaireState.currentQuestion}`]
        .choices;
    const answerCards: JSX.Element[] = [];
    for (let index = 0; index < choices.length; index++) {
      const { label, value } = choices[index];
      answerCards.push(
        <AnswerCard
          key={label}
          id={`${value}`}
          selected={
            questionnaireState.answers[
              `${questionnaireState.currentQuestion}`
            ] === `${value}`
          }
          text={label}
          onPress={setAnswer}
        />
      );
    }
    return answerCards;
  }
  const nextQuestion = useCallback(onNextQuestion, [
    questionnaireState.currentQuestion,
  ]);
  const prevQuestion = useCallback(onPrevQuestion, [
    questionnaireState.currentQuestion,
  ]);
  return (
    <Container>
      <View style={styles.questionContainer}>
        <Title>
          {" "}
          {/** TODO: move to formatting function */}
          {digitsEnToFa(questionnaireState.currentQuestion) +
            "- " +
            testDetailState.test.fields[`${questionnaireState.currentQuestion}`]
              .question}
        </Title>
      </View>
      <View style={styles.answerCardsScrollView}>
        <Scroller>{renderChoices()}</Scroller>
      </View>
      <QuestionNavigator
        currentQuestion={questionnaireState.currentQuestion}
        totalQuestionSize={Object.keys(testDetailState.test.fields).length} // TODO: use computed value
        nextQuestion={nextQuestion}
        prevQuestion={prevQuestion}
        onSubmit={() => {}}
      />
    </Container>
  );
}

export const Questionnaire = observer(QuestionnaireScreen);
