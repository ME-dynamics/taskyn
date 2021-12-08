import React from "react";
import { View } from "react-native";
import {
  Button,
  IconButton,
  InstagramIcon,
  LinkedinIcon,
  Logo,
  Paragraph,
  TelegramIcon,
  WebIcon,
} from "../../../library";
import { styles } from "./styles";
import Communications from "react-native-communications";

export function AboutUs() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo size={120} color={"primary"} />
      </View>
      <View style={styles.bodyContainer}>
        <Paragraph
          style={styles.body}
        >{`همه ی تلاش ما در تسکین آوردن تجربه ای راحتر از جلسات تراپی برای شما عزیزان است.
تسکین یه تجربه جذاب، متفاوت و امن برای شما است. ذهن انسان نمیتواند همه چیز را به خاطر بسپارد یا ممکن است اطلاعاتی که روی کاغذ نوشته اید را گم کنید اما در تسکین ما این اطمینان را حاصل کرده ایم که چنین مشکلاتی چه برای مراجعه کننده و روانشناس پیش نیایید. همه چیز درتسکین ذخیره میشود و دیگر نگران گم کردن اطلاعات خود و ویرایش فایل های خود نباشید. 
اگر میخواهید از اخبار جدید جا نمونید ما را در فضای مجازی دنبال کنید.`}</Paragraph>
      </View>

      <View style={styles.buttoncontainer}>
        <IconButton
          Icon={InstagramIcon}
          onPress={() => Communications.web("https://google.com")}
          size={24}
        />
        <IconButton
          Icon={LinkedinIcon}
          onPress={() => Communications.web("https://google.com")}
          size={24}
        />
        <IconButton
          Icon={TelegramIcon}
          onPress={() => Communications.web("http://google.com")}
          size={24}
        />
        <IconButton
          Icon={WebIcon}
          onPress={() => Communications.web("https://taskyn.ir")}
          size={24}
        />
      </View>
    </View>
  );
}
