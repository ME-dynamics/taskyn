import React from "react";
import { ScrollView, View } from "react-native";
import { Logo, Paragraph } from "../../../library";
import { Questions } from "../../components/Questions";
import { styles } from "./styles";

export function FAQ() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.questionsContainer}
    >
      <View style={styles.logoContainer}>
        <Logo size={120} color={"primary"} />
      </View>
      <View style={styles.container}>
        <Questions
          question={
            "۱- آیا میتوانم به جز دکتر خودم همزمان به چند دکتر دیگر نیز متصل باشم؟"
          }
          answer={"خیر، شما همزمان میتوانید فقط به یک دکتر متصل باشید"}
          line={true}
        />
        <Questions
          question={
            "۱- آیا میتوانم به جز دکتر خودم همزمان به چند دکتر دیگر نیز متصل باشم؟"
          }
          answer={"خیر، شما همزمان میتوانید فقط به یک دکتر متصل باشید"}
          line={true}
        />
        <Questions
          question={
            "۱- آیا میتوانم به جز دکتر خودم همزمان به چند دکتر دیگر نیز متصل باشم؟"
          }
          answer={"خیر، شما همزمان میتوانید فقط به یک دکتر متصل باشید"}
          line={true}
        />
        <Questions
          question={
            "۱- آیا میتوانم به جز دکتر خودم همزمان به چند دکتر دیگر نیز متصل باشم؟"
          }
          answer={"خیر، شما همزمان میتوانید فقط به یک دکتر متصل باشید"}
          line={true}
        />
        <Questions
          question={
            "۱- آیا میتوانم به جز دکتر خودم همزمان به چند دکتر دیگر نیز متصل باشم؟"
          }
          answer={"خیر، شما همزمان میتوانید فقط به یک دکتر متصل باشید"}
          line={false}
        />
      </View>
    </ScrollView>
  );
}
