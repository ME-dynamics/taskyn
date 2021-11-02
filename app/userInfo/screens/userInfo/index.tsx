import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, THEME } from "../../../library";
import { styles } from "./style";
import { IUserInfoProps } from "./type";
import { DropPicker } from "../../components/dropPicker/index";
export function UserInfo(props: IUserInfoProps) {
  const { IInput, IButton, IDropPicker } = props;
  const ComponentGenerator = () => {
    const TitleAndPlaceholderObjectList = [
      { title: "نام ", placeholder: "نام خود را وارد کنید", type: "" },
      {
        title: "نام خانوادگی",
        placeholder: "نام خانوادگی خود را وارد کنید",
        type: "",
      },
      {
        title: "شماره موبایل",
        placeholder: "شماره موبایل خود را وارد کنید",
        type: "",
      },
      {
        title: "شماره تلفن",
        placeholder: "شماره تلفن خود را وارد کنید",
        type: "",
      },
      { title: "آدرس", placeholder: "آدرس خود را وارد کنید", type: "" },
      {
        title: "تلفن ثابت",
        placeholder: "تلفن ثابت خود را وارد کنید",
        type: "",
      },
      { title: "شرح مشکل", placeholder: "شرح مشکل خود را بنویسید", type: "" },
      {
        title: "جنسیت",
        placeholder: "جنسیت را انتخاب کنید",
        type: "dropdown",
        item: ["مرد", "زن"],
      },
      {
        title: "تاریخ تولد",
        placeholder: "تاریخ تولد خود را وارد کنید",
        type: "",
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
        type: "",
        item: [
          "مجرد",
          "متاهل",
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
        type: "",
      },
      { title: "دین", placeholder: "دین خود را انتخاب کنید", type: "" },
      {
        title: "شغل",
        placeholder:
          "عنوان دقیق شغل نوشته شود بدون اشاره به شغل آزاد، دانشجو، دانش آموز",
        type: "",
      },
      {
        title: "بیماری جسمی",
        placeholder: "سابقه وجود هرگونه بیماری جسمی ذکر گردد",
        type: "",
      },
      {
        title: "بیماری روحی",
        placeholder: "سابقه وجود هرگونه بیماری روحی ذکر گردد",
        type: "",
      },
      {
        title: "بیماری افراد خانواده",
        placeholder: "بیماری افراد خانواده را برای هر شخص وارد کنید",
        type: "",
      },
      {
        title: "اعتیاد به مواد مخدر",
        placeholder: "وضعیت اعتیاد خود را وارد کنید",
        type: "",
      },
      {
        title: "اعتیاد به مشروبات الکلی",
        placeholder: "وضعیت اعتیاد خود را وارد کنید",
        type: "",
      },
      { title: "پدر در قید حیات هستند؟", placeholder: "علت فوت", type: "" },
      { title: "مادر در قید حیات هستند؟", placeholder: "علت فوت", type: "" },
      { title: "ازدواج فامیلی", placeholder: "", type: "" },
      {
        title: "فرزند چندم",
        placeholder: "فرزند چندم خانواده هستید؟",
        type: "",
      },
      { title: "شرح برادر خواهر ", placeholder: "", type: "" },
    ];
    const FormComponent = [];
    for (let i = 0; i < TitleAndPlaceholderObjectList.length; i++) {
      if (TitleAndPlaceholderObjectList[i].type == "dropdowm") {
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
      <DropPicker />
      {/* <View style={styles.inputContainer}>{ComponentGenerator()}</View> */}
    </View>
  );
}
