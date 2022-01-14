import React from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView } from "react-native-gesture-handler";
import {
  Button,
  Headline,
  Paragraph,
  Subheading,
  THEME,
  Title,
  Scroller,
  Container,
} from "../../../library";
import { ProgressBar } from "../../components";
import { IFromProps } from "../../types";
import { styles } from "./styles";
export function MbtiResultScreen(props: IFromProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { description, answer, type } = props;
  return (
    <Container>
      <Scroller>
        <View style={styles.titleBar}>
          <Headline>
            {"نتیجه تست "}
            <Title style={{ color: THEME.COLORS.PRIMARY.NORMAL }}>
              {"MBTI :"}
            </Title>
          </Headline>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.avatar}
            resizeMode={"contain"}
            source={require("../../assets/enfj-protagonist.png")}
          />
        </View>
        <View style={styles.answerContainer}>
          <Headline>{"INTJ"}</Headline>
          <View style={styles.line} />
        </View>
        <View style={styles.title}>
          <Subheading>{`تیپ شخصیتی: معمار`}</Subheading>
        </View>
        <View style={styles.descriptionContainer}>
          <Paragraph style={{ lineHeight: 22, color: "#727272" }}>
            {
              "معماران به‌تنهایی در نوک قله قرار گرفته‌اند و یکی از کمیاب‌ترین و توانمندترین گونه‌های شخصیتی از حیث توانایی‌های استراتژیک هستند و به‌خوبی از این امر آگاهند. معماران تنها دو درصد جمعیت را تشکیل می‌دهند و زنان این گونه شخصیتی بسیار نادر هستند و فقط 0.8% جمعیت را تشکیل می‌دهند - به همین دلیل اغلب اوقات پیدا کردن افراد همفکر که قادر باشند با روشن‌اندیشی بی حد و حصر و مانورهای شطرنج‌وار آنها برابری کنند کار دشواری است. افراد دارای گونه شخصیتی معمار اهل تخیل و در عین حال قاطع، بلندپرواز و در عین حال گوشه‌گیر و به شکلی شگفت‌آور کنجکاو هستند، اما انرژی خود را بیهوده هدر نمی‌دهند."
            }
          </Paragraph>
          <View style={styles.line} />
        </View>
        <View style={styles.progressBarGroupContainer}>
          <ProgressBar
            leftPercent={35}
            description={"این ویژگی نحوه تعامل ما با محیط خود را تعیین می کند"}
            leftName={"برونگرا"}
            rightName={"درونگرا"}
            title={"ذهن"}
          />
          <ProgressBar
            leftPercent={60}
            description={
              "این ویژگی نشان می دهد که ما انرژی ذهنی خود را به کجا هدایت می کنیم."
            }
            leftName={"شهودی"}
            rightName={"ناظر"}
            title={"انرژی"}
          />
          <ProgressBar
            leftPercent={64}
            description={
              "این ویژگی تعیین می کند که چگونه تصمیم می گیریم و با احساسات کنار می آییم. "
            }
            leftName={"تفکر"}
            rightName={"احساس"}
            title={"طبیعت"}
          />
          <ProgressBar
            leftPercent={43}
            description={
              "این ویژگی نشان دهنده رویکرد ما به کار، برنامه ریزی و تصمیم گیری است. "
            }
            leftName={"قضاوت کردن"}
            rightName={"اکتشاف"}
            title={"تاکتیک"}
          />
          <ProgressBar
            leftPercent={43}
            description={
              "این ویژگی زیربنای همه چیزهای دیگر است ومی گوید که چقدر به توانایی ها و تصمیمات خود اطمینان داریم. "
            }
            leftName={"اظهار کننده"}
            rightName={"آشفته"}
            title={"هویت"}
          />
        </View>
      </Scroller>
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          size={"wide"}
          rippleColor={"lightGrey"}
          onPress={() => {
            navigation.goBack();
          }}
        >
          {"بازگشت"}
        </Button>
      </View>
    </Container>
  );
}

export const MbtiResult = observer(MbtiResultScreen);
