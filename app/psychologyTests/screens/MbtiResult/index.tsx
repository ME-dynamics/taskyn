//@ts-nocheck
import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Headline,
  Paragraph,
  Subheading,
  THEME,
  Title,
  Scroller,
  Container,
} from "../../../library";
import { ProgressBar } from "../../components";
import { styles } from "./styles";
import { onTestSubmit } from "../../usecases";
import { mbtiState } from "../../entities";
export function MbtiResultScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  async function init() {
    await onTestSubmit();
  }
  useEffect(() => {
    init();
  }, []);
  function renderMbtiResult() {
    const result: JSX.Element[] = [];
    const length = mbtiState.mbtiResult.interpret.length;
    for (let index = 0; index < length; index++) {
      if (mbtiState.mbtiResult?.interpret[index].type === "title") {
        result.push(
          // TODO: generate a stable key
          <Title key={Math.random()} style={styles.titleOfInterpret}>
            {`${mbtiState.mbtiResult?.interpret[index].data}:`}
          </Title>
        );
      }
      if (mbtiState.mbtiResult?.interpret[index].type === "slogan") {
        result.push(
          <Subheading
          key={Math.random()}
            style={[
              styles.titleOfInterpret,
              { color: THEME.COLORS.PRIMARY.DARK },
            ]}
          >
            {`-- ${mbtiState.mbtiResult?.interpret[index].data} --`}
          </Subheading>
        );
      }
      if (mbtiState.mbtiResult?.interpret[index].type === "list") {
        result.push(
          <Paragraph key={Math.random()} style={styles.dataOfInterpret}>
            {mbtiState.mbtiResult?.interpret[index].data}
          </Paragraph>
        );
      }
      if (mbtiState.mbtiResult?.interpret[index].type === "paragraph") {
        result.push(
          <Paragraph key={Math.random()} style={styles.dataOfInterpret}>
            {`${mbtiState.mbtiResult?.interpret[index].data}`}
          </Paragraph>
        );
      }
    }
    return result;
  }
  function renderProgressBar() {
    const result: JSX.Element[] = [];
    const length = mbtiState.mbtiResult.aggregates.length;
    for (let index = 0; index < length; index = index + 2) {
      result.push(
        <ProgressBar
          
          leftName={transformTitle(
            mbtiState.mbtiResult.aggregates[index].title
          )}
          leftPercent={calculator(
            mbtiState.mbtiResult.aggregates[index].aggregate,
            mbtiState.mbtiResult.aggregates[index + 1].aggregate
          )}
          rightName={transformTitle(
            mbtiState.mbtiResult.aggregates[index + 1].title
          )}
          key={mbtiState.mbtiResult.aggregates[index].aggregate}
        />
      );
    }
    return result;
  }
  function calculator(value1: number, value2: number) {
    return Math.floor((value1 * 100) / (value1 + value2));
  }
  function transformTitle(value: string) {
    if (value === "e") {
      return "برون گرایی";
    }
    if (value === "i") {
      return "درون گرایی";
    }
    if (value === "s") {
      return "حسی";
    }
    if (value === "n") {
      return "شهودی";
    }
    if (value === "t") {
      return "تفکری";
    }
    if (value === "f") {
      return "احساسی";
    }
    if (value === "j") {
      return "داوری کننده";
    }
    if (value === "p") {
      return "ادراک کننده";
    }
    return "";
  }
  return (
    <Container>
      <Scroller contentContainerStyle={{ alignItems: "center" }}>
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
        {renderMbtiResult()}
        {renderProgressBar()}
        {/* <View style={styles.answerContainer}>
          <Headline>{"mbtj"}</Headline>
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
        </View> */}
      </Scroller>
      {/* <View style={styles.buttonContainer}>
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
      </View> */}
    </Container>
  );
}

export const MbtiResult = observer(MbtiResultScreen);
