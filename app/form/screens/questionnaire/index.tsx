import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, colors, Headline, Paragraph, Title } from "../../../library";
import { AnswerCard } from "../../components/answerCard";
import { Question } from "../../components/questions";
import { styles } from "./style";
export function Questionnaire() {
  return (
    <View style={styles.container}>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollview}>
          <Question />
          <AnswerCard />
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode={"contained"} rippleColor={"lightGrey"} size={"big"}>
          {"بعدی"}
        </Button>
        {/* <Button mode={"contained"} rippleColor={"lightGrey"} size={"medium"}>
          {"قبلی"}
        </Button> */}
      </View>
    </View>
  );
}
