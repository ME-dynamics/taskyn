import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Caption, Headline, Paragraph, Title } from "../../../../library";
import { styles } from "./styles";
const x = "معمار";
export function MbtiResult() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.avatar} resizeMode={"contain"} source={require("../../../assets/enfj-protagonist.png")} />
        </View>
        <View style={styles.answerContainer}>
          <Headline >{"MBTI"}</Headline>
          <View style={styles.line}/>
        </View>
        <View style={styles.title}>
            <Title>{`تیپ شخصیتی: ${x}`}</Title>
        </View>
        <View style={styles.descriptionContainer}>
            <Paragraph>{"گونه شخصیتی منطق‌دان نسبتاً نادر است و تنها سه درصد از جمعیت را شامل می‌شود که قطعاً خبر خوبی برای آنها است چرا که هیچ چیزی به اندازه باعث نارضایتی آنها نمی‌شود. منطق‌دانان به نوآوری و خلاقیت، دیدگاه منحصر به فرد و عقل نیرومند خود مباهات می‌کنند. منطق‌دانان که معمولاً به‌عنوان فیلسوف، متفکر، یا استاد رؤیاپرداز شناخته می‌شوند، مسئول بسیاری از اکتشافات علمی در طول تاریخ بوده‌اند"}</Paragraph>
        </View>
        <View style={styles.progressBarContainer}></View>
      </ScrollView>
    </View>
  );
}
