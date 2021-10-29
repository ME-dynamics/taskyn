import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Headline, Paragraph, Title } from "../../../library";
import { ProgressBar } from "../../components";
import { IFromProps } from "../../types";
import { styles } from "./styles";
export function MbtiResult(props: IFromProps) {
  const { description,answer,type } = props;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.avatar}
            resizeMode={"contain"}
            source={require("../../../assets/enfj-protagonist.png")}
          />
        </View>
        <View style={styles.answerContainer}>
          <Headline>{answer}</Headline>
          <View style={styles.line} />
        </View>
        <View style={styles.title}>
          <Title>{`تیپ شخصیتی: ${type}`}</Title>
        </View>
        <View style={styles.descriptionContainer}>
          <Paragraph>{description}</Paragraph>
        </View>
        <View style={styles.progressBarGroupContainer}>
          <ProgressBar 
          leftPercent={10}
          description={"شیس بذشخع بذشخ دبش"}
          leftName={"سشبتذشس"}
          rightName={"dfd"}
          title={"sd"}
  
          />
         
        </View>
      </ScrollView>
    </View>
  );
}
