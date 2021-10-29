import React, { useLayoutEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { Button, Subheading, Title } from "../../../library";
import { AnswerCard, Question } from "../../components";
import { styles } from "./style";
export function Questionnaire() {
  const x = "1";
  const y = "224";
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title:"فرم نيو",
      headerRight: () => (
        <Subheading>{`${y} / ${x}`}</Subheading>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      {/* <View style={styles.headerContiner}>
        <View style={styles.header}>
          <Subheading>{y}</Subheading>
          <Subheading>{" از "}</Subheading>
          <Title>{x}</Title>
        </View> */}

      <Question />
      {/* </View> */}
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollview}>
          <AnswerCard />
          <AnswerCard />
          <AnswerCard />
          <AnswerCard />
          <AnswerCard />
          <AnswerCard />
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode={"contained"} rippleColor={"lightGrey"} size={"medium"}>
          {"قبلی"}
        </Button>
        <Button mode={"contained"} rippleColor={"lightGrey"} size={"medium"}>
          {"بعدی"}
        </Button>
      </View>
    </View>
  );
}
