import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Button, Caption, Headline, Paragraph, Subheading, Title } from "../../../library";
import { styles } from "./style";

export function FormDetails() {
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
            <Subheading style={{textAlign:"right"}}>
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
            
            >
            {"ورود به فرم"}


            </Button>
          </View>
    </View>
  );
}
