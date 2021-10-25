import React from "react";
import { View, Text } from "react-native";
import {
  Button,
  Headline,
  Logo,
  Paragraph,
  Subheading,
  Title,
} from "../../../../library";
import { styles } from "./styles";
import Communications from "react-native-communications";
export function ContactUS() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.logoContainer}>
          <Logo size={100} color={"white"} />
        </View>
        <Headline style={styles.title}>{"پشتیبانی"}</Headline>
      </View>
      <View style={styles.bodyContainer}>
        <Paragraph>{`فرقی نمی‌کند در کدام نقطه از زمین باشید، ما در سیمیاروم کمکتان می‌کنیم تجربه جذاب‌تر و بهتری از زندگی داشته باشید. کمکتان می‌کنیم هر مسیری که برای زندگی انتخاب می‌کنید، پر از امید و حال خوب باشد؛ چه مهاجرت، چه ازدواج، چه بچه‌دار شدن، چه سفر درونی، چه مشاوره کودک و نوجوان و .. خلاصه هر مسیری که شما بخواهید. ما کمکتان می‌کنیم طوری زندگی کنید که حالتان همیشه خوب باشد.`}</Paragraph>
      </View>
      <View style={styles.buttons}>
        <View style={styles.socialMedia}></View>
        <View style={styles.buttoncontainer}>
          <Button
            mode={"contained"}
            rippleColor={"lightGrey"}
            size={"big"}
            onPress={() => Communications.phonecall("09162426104", true)}
          >
            {"تماس با پشتیبانی"}
          </Button>
        </View>
      </View>
    </View>
  );
}
