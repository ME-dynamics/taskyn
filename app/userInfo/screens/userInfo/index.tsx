import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, THEME } from "../../../library";
import { styles } from "./style";
import { IUserInfoProps } from "./type";
import { DropPicker } from "../../components/dropPicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export function UserInfo(props: IUserInfoProps) {
  const { IInput, IButton, IDropPicker } = props;
  const ComponentGenerator = () => {
    const TitleAndPlaceholderObjectList = [
      { title: "نام ", placeholder: "نام خود را وارد کنید", type: "input" },
      {
        title: "نام خانوادگی",
        placeholder: "نام خانوادگی خود را وارد کنید",
        type: "input",
      },
      { title: "سن ", placeholder: "سن خود را وارد کنید", type: "input" },
      { title: "آدرس", placeholder: "آدرس خود را وارد کنید", type: "input" },
      {
        title: "تلفن ثابت",
        placeholder: "تلفن ثابت خود را وارد کنید",
        type: "input",
      },
      {
        title: "شرح مشکل",
        placeholder: "شرح مشکل خود را بنویسید",
        type: "input",
      },
      {
        title: "جنسیت",
        placeholder: "جنسیت را انتخاب کنید",
        type: "dropdown",
        item: ["مرد", "زن"],
      },
      {
        title: "تاریخ تولد",
        placeholder: "تاریخ تولد خود را وارد کنید",
        type: "input",
      },
      {
        title: "وضعیت تاهل",
        placeholder: "وضعیت تاهل خود را انتخاب کنید",
        type: "dropdown",
        item: ["مجرد", "متاهل"],
      },
      {
        title: "وضعیت زناشویی",
        placeholder: "وضعیت زناشویی خود را انتخاب کنید",
        type: "dropdown",
        item: [
          "نامزد",
          "عقد",
          "عقد دایم",
          "ازدواج موقت",
          "تعدد زوجات",
          "متارکه",
          "مطلقه",
          "بیوه",
        ],
      },
      {
        title: "تحصیلات",
        placeholder: "تحصیلات خود را انتخاب کنید",
        type: "dropdown",
        item: [
          "بی سواد (برای سنین بالا)",
          "زیر سن مدرسه",
          "سن پیش دبستانی",
          "ابتدایی",
          "راهنمایی",
          "دبیرستان",
          "ترک تحصیل ابتدایی",
          "ترک تحصیل راهنمایی",
          "ترک تحصیل دبیرستان",
          "دیپلم و پیش دانشگاهی",
          "دارای مدرک دانشگاهی",
          "دانشجو",
          "مدرک حوزوی",
        ],
      },
      {
        title: "رشته تحصیلی",
        placeholder: "رشته تحصیلی خود را وارد کنید",
        type: "input",
      },
      {
        title: "دین",
        placeholder: "دین خود را انتخاب کنید",
        type: "dropdown",
        item: ["اسلام شیعه", "اسلام سنی", "زرتشتی", "مسیحی", "سایر"],
      },
      {
        title: "شغل",
        placeholder:
          "عنوان دقیق شغل نوشته شود بدون اشاره به شغل آزاد، دانشجو، دانش آموز",
        type: "input",
      },
      {
        title: "بیماری جسمی",
        placeholder: "سابقه وجود هرگونه بیماری جسمی ذکر گردد",
        type: "input",
      },
      {
        title: "بیماری روحی",
        placeholder: "سابقه وجود هرگونه بیماری روحی ذکر گردد",
        type: "input",
      },
      {
        title: "بیماری افراد خانواده",
        placeholder: "بیماری افراد خانواده را برای هر شخص وارد کنید",
        type: "input",
      },
      {
        title: "اعتیاد به مواد مخدر",
        placeholder: "وضعیت اعتیاد خود را وارد کنید",
        type: "input",
      },
      {
        title: "اعتیاد به مشروبات الکلی",
        placeholder: "وضعیت اعتیاد خود را وارد کنید",
        type: "input",
      },
      {
        title: "پدر در قید حیات هستند؟",
        placeholder: "علت فوت",
        type: "input",
      },
      {
        title: "مادر در قید حیات هستند؟",
        placeholder: "علت فوت",
        type: "input",
      },
      { title: "ازدواج فامیلی", placeholder: "", type: "dropdown" },
      {
        title: "فرزند چندم",
        placeholder: "فرزند چندم خانواده هستید؟",
        type: "input",
      },
      { title: "شرح برادر خواهر ", placeholder: "", type: "input" },
    ];
    const FormComponent = [];
    for (let i = 0; i < TitleAndPlaceholderObjectList.length; i++) {
      if (TitleAndPlaceholderObjectList[i].type == "dropdown") {
        FormComponent.push();
      } else {
        FormComponent.push(
          <Input
            mode="flat"
            title={TitleAndPlaceholderObjectList[i].title}
            placeholder={TitleAndPlaceholderObjectList[i].placeholder}
          />
        );
      }
    }
    return FormComponent;
  };
  return (
    <View style={styles.container}>
      {/* <DropPicker /> */}
      <KeyboardAwareScrollView
        style={styles.inputContainer}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {ComponentGenerator()}
      </KeyboardAwareScrollView>
    </View>
  );
}
