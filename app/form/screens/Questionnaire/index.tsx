import React, { useLayoutEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Paragraph, Subheading, THEME, Title } from "../../../library";
import { AnswerCard, Question } from "../../components";
import { styles } from "./style";
export function Questionnaire() {
  const x = "1";
  const y = "224";
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "تست MBTI",
      headerRight: () => (
        <Subheading style={{ color: "white" }}>{`${y} / ${x}`}</Subheading>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
      <Question />

      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.contentContainer}
        >
          <AnswerCard />
          <AnswerCard />
          <AnswerCard />
          <AnswerCard />
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode={"contained"} rippleColor={"lightGrey"} size={"small"}>
          {"قبلی"}
        </Button>
        <Paragraph>
          <Paragraph style={{ color: THEME.COLORS.PRIMARY.NORMAL }}>
            {"۱"}
          </Paragraph>
          {" از "}
          <Paragraph style={{ color: THEME.COLORS.PRIMARY.NORMAL }}>
            {"۱۰۰"}
          </Paragraph>
        </Paragraph>
        <Button mode={"contained"} rippleColor={"lightGrey"} size={"small"}>
          {"بعدی"}
        </Button>
      </View>
    </View>
  );
}
