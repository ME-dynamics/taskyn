import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Button, Paragraph, Subheading, THEME, Title } from "../../../library";
import { FormNumberIcon, TimerIcon } from "../../../library/Icon";
import { styles } from "./style";
const FormCount = 93;
export function FormDetails() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "تست MBTI",
      headerTitleAlign: "center",
      headerTitle: (props) => (
        <Paragraph style={{ fontSize: 18, top: 4, color: "white" }}>
          {props.children}
        </Paragraph>
      ),
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: THEME.COLORS.PRIMARY.NORMAL,
      },
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../assets/Neo.png")}
              resizeMode={"stretch"}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Title>{"تست بریگز و مایرز"}</Title>
            <Subheading style={{ textAlign: "right", top: 10 }}>
              {"Myers–Briggs Type Indicator"}
            </Subheading>
          </View>
          <View style={styles.descriptionContainer}>
            <Paragraph style={{ color: "#727272" }}>
              {`در نظریه یونگ، هشت الگوی رفتاری انسان معرفی شد. بریگز و مایرز ایده‌های یونگ را در مورد این الگوهای ذهنی توسعه دادند و در نهایت نقش آنها را در مفهوم و توصیف انواع شخصیت‌ها در تست MBTI گنجاندند. تست بریگز و مایرز نوعی ارزیابی است که در آن شخصیت فرد را با توجه به چهار معیار اصلی مورد بررسی قرار می‌گیرد که در آن هر حرف مربوط به یک اولویت یا گرایش شخصیتی خاص است. این معیارها برون گرا یا درون گرا بودن، شهودی یا حسی بوده، ادراکی یا قضاوتی بودن و در نهایت احساسی یا منطقی بودن هستند.`}{" "}
            </Paragraph>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.formDetails}>
          <View style={styles.formDetailsBody}>
            <Paragraph style={{ color: "#727272", right: 10 }}>
              {"تعداد تست ها: "} <Paragraph>{FormCount}</Paragraph>
            </Paragraph>
            <TimerIcon size={24} />
          </View>
          <View style={styles.formDetailsBody}>
            <Paragraph style={{ color: "#727272", right: 8 }}>
              {"زمان لازم: "} <Paragraph>{"۱۰ دقیقه"}</Paragraph>
            </Paragraph>
            <FormNumberIcon size={24} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Button
            mode={"contained"}
            size={"big"}
            rippleColor={"lightGrey"}
            onPress={() => {
              navigation.push("Questionnaire");
            }}
          >
            {"شروع تست"}
          </Button>
        </View>
      </View>
    </View>
  );
}
