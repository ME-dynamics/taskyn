import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Button, Paragraph, Subheading, THEME, Title } from "../../../library";
import { styles } from "./style";

export function FormDetails() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "تست MBTI",
      headerTitleAlign: "center",
      headerTitle: (props) => <Paragraph style={{fontSize: 18, top: 4, color: "white"}}  >{props.children}</Paragraph>,
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
              source={require("../../assets/neoForm.jpg")}
              resizeMode={"stretch"}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Title>
              {"پرسشنامه چند جنبه ای شخصیتی مینه چند عاملی فلان سوتا"}
            </Title>
            <Subheading style={{ textAlign: "right" }}>
              {"Revised NEO Personality Inventory"}
            </Subheading>
          </View>
          <View style={styles.descriptionContainer}>
            <Paragraph>
              {`در حوضه منابع انسانی سازمان ها: این آزمون در سال های اخیر به عنوان یکی از پرکاربردترین آزمون های استخدام  مورد توجه  شرکت ها و ارگان های بزرگ و کوچک قرار گرفته است. همچنین این تست می تواند عملکرد شغلی را پیش بینی کند به این معنی که آیا او می تواند خروجی مورد نظر را برای شرکت به دست آورد یا خیر؟ و ویژگی های روان شناسی افراد از افسردگی، توانایی های مدیریتی تا هدر حوضه منابع انسانی سازمان ها: این آزمون در سال های اخیر به عنوان یکی از پرکاربردترین آزمون های استخدام  مورد توجه  شرکت ها و ارگان های بزرگ و کوچک قرار گرفته است. همچنین این تست می تواند عملکرد شغلی را پیش بینی کند به این معنی که آیا او می تواند خروجی مورد نظر را برای شرکت به دست آورد یا خیر؟ و ویژگی های روان شناسی افراد از افسردگی، توانایی های مدیریتی تا هوش هیجانی را انجام دهد.در حوضه منابع انسانی سازمان ها: این آزمون در سال های اخیر به عنوان یکی از پرکاربردترین آزمون های استخدام  مورد توجه  شرکت ها و ارگان های بزرگ و کوچک قرار گرفته است. همچنین این تست می تواند عملکرد شغلی را پیش بینی کند به این معنی که آیا او می تواند خروجی مورد نظر را برای شرکت به دست آورد یا خیر؟ و ویژگی های روان شناسی افراد از افسردگی، توانایی های مدیریتی تا هوش هیجانی را انجام دهد.وش هیجانی را انجام دهد.`}
            </Paragraph>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          size={"big"}
          rippleColor={"lightGrey"}
          onPress={() => {
            navigation.push("Questionnaire");
          }}
        >
          {"ورود به فرم"}
        </Button>
      </View>
    </View>
  );
}
