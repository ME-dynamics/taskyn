import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Button,
  Input,
  SelectButton,
  Subheading,
  THEME,
} from "../../../library";
import { styles } from "./style";
import { IUserInfoProps } from "./type";
import { DropPicker } from "../../components/dropPicker";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { observer } from "mobx-react-lite";
function UserInfoScreen(props: IUserInfoProps) {
  const { IInput, IButton, IDropPicker } = props;
  const [gender, setGender] = useState<"female" | "male" | null>(null);
  const [state, setState] = useState({
    gender: false,
    taahol: false,
    family: false,
  });
  function StateManager(text: string) {
    if (text === "gender") {
      // setState({gender:true});
      return state.gender;
    }
    if (text === "family") {
      return state.family;
    }
    if (text === "taahol") {
      return state.taahol;
    }
  }

  const ComponentGenerator = () => {
    const TitleAndPlaceholderObjectList = [
      {
        title: "نام ",
        placeholder: "نام خود را وارد کنید",
        type: "input",
        value: "سجاد",
      },
      {
        title: "نام خانوادگی",
        placeholder: "نام خانوادگی خود را وارد کنید",
        type: "input",
        value: "سیف اله",
      },
      {
        title: "سن ",
        placeholder: "مثال ۱۳۷۶/۰۶/۰۶",
        type: "input",
        value: "24",
      },
      {
        title: "آدرس",
        placeholder: "آدرس خود را وارد کنید",
        type: "input",
        value: "تهران خ ازادی خ طوس",
      },
      {
        title: "تلفن ثابت",
        placeholder: "تلفن ثابت خود را وارد کنید",
        type: "input",
        value: "۰۲۱۶۶۶۶۶۶۶۶",
      },
      {
        title: "شرح مشکل",
        placeholder: "شرح مشکل خود را بنویسید",
        type: "input",
        value: "ندارم :)",
      },
      {
        title: "جنسیت",
        placeholder: "جنسیت را انتخاب کنید",
        type: "radio",
        item: ["مرد", "زن"],
        value: "",
        state: "female",
      },
      {
        title: "تاریخ تولد",
        placeholder: "تاریخ تولد خود را وارد کنید",
        type: "input",
        value: "۱۳۷۶/۶/۶",
      },
      {
        title: "وضعیت تاهل",
        placeholder: "وضعیت تاهل خود را انتخاب کنید",
        type: "radio",
        item: ["مجرد", "متاهل"],
        value: "",
        state: "taahol",
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
        value: "",
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
        value: "",
      },
      {
        title: "رشته تحصیلی",
        placeholder: "رشته تحصیلی خود را وارد کنید",
        type: "input",
        value: "ارشد",
      },
      {
        title: "دین",
        placeholder: "دین خود را انتخاب کنید",
        type: "dropdown",
        item: ["اسلام شیعه", "اسلام سنی", "زرتشتی", "مسیحی", "سایر"],
        value: "",
      },
      {
        title: "شغل",
        placeholder: "عنوان دقیق شغل نوشته شود",
        type: "input",
        value: "برنامه نویس",
      },
      {
        title: "بیماری جسمی",
        placeholder: "سابقه وجود هرگونه بیماری جسمی ذکر گردد",
        type: "input",
        value: "ندارم",
      },
      {
        title: "بیماری روحی",
        placeholder: "سابقه وجود هرگونه بیماری روحی ذکر گردد",
        type: "input",
        value: "ندارم",
      },
      {
        title: "بیماری افراد خانواده",
        placeholder: "بیماری افراد خانواده را برای هر شخص وارد کنید",
        type: "input",
        value: "همه مریضن",
      },
      {
        title: "اعتیاد به مواد مخدر",
        placeholder: "وضعیت اعتیاد خود را وارد کنید",
        type: "input",
        value: "ندارم",
      },
      {
        title: "اعتیاد به مشروبات الکلی",
        placeholder: "وضعیت اعتیاد خود را وارد کنید",
        type: "input",
        value: "ندارم",
      },
      {
        title: "پدر در قید حیات هستند؟",
        placeholder: "علت فوت",
        type: "input",
        value: "بله",
      },
      {
        title: "مادر در قید حیات هستند؟",
        placeholder: "علت فوت",
        type: "input",
        value: "بله",
      },
      {
        title: "ازدواج فامیلی",
        placeholder: "",
        type: "radio",
        item: ["بله", "خیر"],
        value: "",
        state: "family",
      },
      {
        title: "فرزند چندم",
        placeholder: "فرزند چندم خانواده هستید؟",
        type: "input",
        value: "پنجم",
      },
      {
        title: "شرح برادر خواهر ",
        placeholder: "شرح برادر خواهر خود را بنویسید",
        type: "input",
        value: "طولانیه",
      },
    ];
    const FormComponent = [];
    for (let i = 0; i < TitleAndPlaceholderObjectList.length; i++) {
      if (TitleAndPlaceholderObjectList[i].type == "dropdown") {
        FormComponent.push(
          <View
            style={{
              marginVertical: 6,
              width: widthPercentageToDP(90),
              alignItems: "flex-end",
              overflow: "visible",
            }}
          >
            <DropPicker
              title={TitleAndPlaceholderObjectList[i].title}
              item={TitleAndPlaceholderObjectList[i].item}
            />
          </View>
        );
      } else if (TitleAndPlaceholderObjectList[i].type == "input") {
        FormComponent.push(
          <View>
            <Input
              mode="with-label"
              // value={TitleAndPlaceholderObjectList[i].value}
              title={TitleAndPlaceholderObjectList[i].title}
              placeholder={TitleAndPlaceholderObjectList[i].placeholder}
            />
          </View>
        );
      } else if (TitleAndPlaceholderObjectList[i].type == "radio") {
        FormComponent.push(
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              width: widthPercentageToDP(100),
              right: 20,
            }}
          >
            <Subheading>{`${TitleAndPlaceholderObjectList[i].title}:`}</Subheading>
            <SelectButton
              mode={"radio"}
              selected={gender === "male"}
              size={24}
              onPress={() => {
                setGender("male");
              }}
            >
              <Subheading style={{ color: THEME.COLORS.GREY.DARK }}>
                {TitleAndPlaceholderObjectList[i].item[0]}
              </Subheading>
            </SelectButton>
            <SelectButton
              mode={"radio"}
              selected={gender === "female"}
              size={24}
              onPress={() => {
                setGender("female");
              }}
            >
              <Subheading style={{ color: THEME.COLORS.GREY.DARK }}>
                {TitleAndPlaceholderObjectList[i].item[1]}
              </Subheading>
            </SelectButton>
          </View>
        );
      }
    }
    return FormComponent;
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.inputContainer}
        contentContainerStyle={{
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        {ComponentGenerator()}
        <View>
          <Button mode={"contained"} rippleColor={"lightGrey"} size={"wide"}>
            {"ثبت اطلاعات"}
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

export const UserInfo = observer(UserInfoScreen);
