import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Input, Container, Scroller } from "../../../library";
import { styles } from "./style";
import { IUserInfoProps } from "./type";
import { TwoChoice } from "../../components";
import { DropPicker } from "../../components/dropPicker";
function UserInfoScreen(props: IUserInfoProps) {
  const { IInput, IButton, IDropPicker } = props;
  const [gender, setGender] = useState<"female" | "male" | null>(null);
  const [state, setState] = useState({
    gender: false,
    taahol: false,
    family: false,
  });

  return (
    <Container>
      <Scroller
        style={styles.inputContainer}
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 16,
        }}
      >
        <Input
          mode={"with-label"}
          title={"نام"}
          placeholder={"نام خود را وارد کنید"}
        />
        <Input
          mode={"with-label"}
          title={"نام خانوادگی"}
          placeholder={"نام خانوادگی خود را وارد کنید"}
        />
        <Input
          mode={"with-label"}
          title={"تاریخ تولد"}
          placeholder={"1376/12/12"}
        />
        <Input
          mode={"with-label"}
          title={"آدرس"}
          placeholder={"آدرس خود را وارد کنید"}
        />
        <Input
          mode={"with-label"}
          title={"تلفن ثابت"}
          placeholder={"02XXXXXXXXXX"}
        />
        <Input
          mode={"with-label"}
          title={"شرح مشکل"}
          placeholder={"مشکل خود را به طور کامل شرح دهید"}
        />
        <TwoChoice
          title={"جنسیت:"}
          choiceState={"مرد"}
          firstChoice={"مرد"}
          secondChoice={"زن"}
          onFirstChoicePress={() => {
            console.log("first press");
          }}
          onSecondChoicePress={() => {
            console.log("second press");
          }}
        />
        <TwoChoice
          title={"وضعیت تاهل:"}
          choiceState={"مجرد"}
          firstChoice={"مجرد"}
          secondChoice={"متاهل"}
          onFirstChoicePress={() => {
            console.log("first press");
          }}
          onSecondChoicePress={() => {
            console.log("second press");
          }}
        />
        <DropPicker
          title={"وضعیت زناشویی"}
          item={[
            "نامزد",
            "عقد",
            "عقد دایم",
            "ازدواج موقت",
            "تعدد زوجات",
            "متارکه",
            "مطلقه",
            "بیوه",
          ]}
        />
        <DropPicker
          title={"تحصیلات"}
          item={[
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
          ]}
        />

        <Input
          mode={"with-label"}
          title={"رشته تحصیلی"}
          placeholder={"رشته تحصیلی خود را وارد کنید"}
        />
        <DropPicker
          title={"دین"}
          item={["اسلام شیعه", "اسلام سنی", "زرتشتی", "مسیحی", "سایر"]}
        />
        <Input
          mode={"with-label"}
          title={"شغل"}
          placeholder={"شغل خود را وارد کنید"}
        />
        <Input
          mode={"with-label"}
          title={"بیماری حسمی"}
          placeholder={"بیماری حسمی خود را وارد کنید"}
        />
        <Input
          mode={"with-label"}
          title={"بیماری روحی"}
          placeholder={"بیماری روحی خود را وارد کنید"}
        />
        <Input
          mode={"with-label"}
          title={"بیماری افراد خانواده"}
          placeholder={"بیماری افراد خانواده را برای هر شخص وارد کنید"}
          multiline
          numberOfLines={6}
        />
        <Input
          mode={"with-label"}
          title={"اعتیاد به مواد مخدر"}
          placeholder={"اعتیاد به مواد مخدر را وارد کنید"}
        />
        <Input
          mode={"with-label"}
          title={"اعتیاد به مشروبات الکلی"}
          placeholder={"اعتیاد به مشروبات الکلی را وارد کنید"}
        />
        <TwoChoice
          title={"پدر در قید حیات هستند؟"}
          choiceState={"بله"}
          firstChoice={"بله"}
          secondChoice={"خیر"}
          onFirstChoicePress={() => {
            console.log("first press");
          }}
          onSecondChoicePress={() => {
            console.log("second press");
          }}
        />
        <Input
          mode={"with-label"}
          title={"علت فوت پدر"}
          placeholder={"علت فوت پدر را وارد کنید"}
        />
        <TwoChoice
          title={"مادر در قید حیات هستند؟"}
          choiceState={"بله"}
          firstChoice={"بله"}
          secondChoice={"خیر"}
          onFirstChoicePress={() => {
            console.log("first press");
          }}
          onSecondChoicePress={() => {
            console.log("second press");
          }}
        />
        <Input
          mode={"with-label"}
          title={"علت فوت مادر"}
          placeholder={"علت فوت مادر را وارد کنید"}
        />
        <TwoChoice
          title={"ازدواج فامیلی؟"}
          choiceState={"بله"}
          firstChoice={"بله"}
          secondChoice={"خیر"}
          onFirstChoicePress={() => {
            console.log("first press");
          }}
          onSecondChoicePress={() => {
            console.log("second press");
          }}
        />
        <Input
          mode={"with-label"}
          title={"فرزند چندم"}
          placeholder={"فرزند چندم را وارد کنید"}
        />
        <Input
          mode={"with-label"}
          title={"شرح برادر و خواهر"}
          placeholder={"چنتایید چطوری"}
          multiline
          numberOfLines={6}
        />
        <Button mode={"contained"} rippleColor={"lightGrey"} size={"wide"}>
          {"ثبت اطلاعات"}
        </Button>
      </Scroller>
    </Container>
  );
}

export const UserInfo = observer(UserInfoScreen);
