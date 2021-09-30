import React from "react";
import { View, Text } from "react-native";
import { Button, colors, Headline, Paragraph, Title } from "../../../library";
import { styles } from "./style";

export function Questionnaire() {
  return (
    <View style={styles.container}>
      <View style={styles.QuestionContainer}>
        <Title style={{fontSize:25,}}>{" حتی آزردگی و ناراحتی های کوچک میتواند در من احساس ناتوانی و محرومیت کنند"}</Title>

      </View>
      <View style={styles.answerContainer}>
        <View style={styles.answerCart}>
          <View style={styles.textContainer}>
          <Paragraph>{"علاقه ای به همکاری با مردم ندارم"}</Paragraph>
          </View>


        </View>
        {/* <Paragraph style={{fontSize:18}}>{"خیلی موافقم"}</Paragraph>
       
        <Paragraph>{"مزایا"}</Paragraph>
        <Paragraph>{"مردم خیلی دوست دارند که شما آن را انجام دهید"}</Paragraph> */}

      </View>
      <View style={styles.buttonContainer}>
      <Button 
      mode={"contained"}
      rippleColor={"lightGrey"}
      size={"medium"}
            >
      {"بعدی"}
      </Button>
      <Button 
      mode={"contained"}
      rippleColor={"lightGrey"}
      size={"medium"}
            >
      {"قبلی"}
      </Button>
      </View>
    </View>
  );
}
