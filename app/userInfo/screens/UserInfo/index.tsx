import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { Button, Input, Container, Scroller } from "../../../library";

import { TwoChoice, ScrollPicker } from "../../components";
import { userInfoState } from "../../entities";
import { updateUserProfile, retrieveUserProfile } from "../../usecases";

import { styles } from "./styles";

function UserInfoScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function prepare() {
      await retrieveUserProfile();
      setLoading(false);
    }
    prepare();
  }, []);
  return (
    <Container loading={loading}>
      <Scroller
        contentContainerStyle={styles.scrollViewContentContainer}
        nestedScrollEnabled
      >
        <Input
          mode={"with-label"}
          title={"نام"}
          placeholder={"نام خود را وارد کنید"}
          value={userInfoState.firstName}
          onChangeText={(text) => {
            userInfoState.setFirstName(text);
          }}
        />
        <Input
          mode={"with-label"}
          title={"نام خانوادگی"}
          placeholder={"نام خانوادگی خود را وارد کنید"}
          value={userInfoState.lastName}
          onChangeText={(text) => {
            userInfoState.setLastName(text);
          }}
        />
        <Input
          mode={"with-label"}
          title={"تاریخ تولد"}
          placeholder={"1376/10/24"}
          textAlign={"center"}
          value={userInfoState.birthday}
          onChangeText={(text) => {
            userInfoState.setBirthday(text);
          }}
        />
        <Input
          mode={"with-label"}
          title={"آدرس"}
          placeholder={"آدرس خود را وارد کنید"}
          value={userInfoState.address}
          onChangeText={(text) => {
            userInfoState.setAddress(text);
          }}
        />
        <Input
          mode={"with-label"}
          title={"تلفن ثابت"}
          placeholder={"02XXXXXXXXX"}
          textAlign={"center"}
          value={userInfoState.telephone}
          onChangeText={(text) => {
            userInfoState.setTelephone(text);
          }}
        />
        <Input
          mode={"with-label"}
          title={"شرح مشکل"}
          placeholder={"مشکل خود را به طور کامل شرح دهید"}
          value={userInfoState.problemDescription}
          onChangeText={(text) => {
            userInfoState.setProblemDescription(text);
          }}
        />
        <TwoChoice
          title={"جنسیت:"}
          choiceState={userInfoState.genderPersianText}
          firstChoice={"مرد"}
          secondChoice={"زن"}
          onFirstChoicePress={() => {
            userInfoState.setGender("male");
          }}
          onSecondChoicePress={() => {
            userInfoState.setGender("female");
          }}
        />
        <TwoChoice
          title={"وضعیت تاهل:"}
          choiceState={userInfoState.maritalStatusText}
          firstChoice={"مجرد"}
          secondChoice={"متاهل"}
          onFirstChoicePress={() => {
            userInfoState.setMaritalStatus("single");
          }}
          onSecondChoicePress={() => {
            userInfoState.setMaritalStatus("engaged");
          }}
        />

        <ScrollPicker
          title={"وضعیت تاهل"}
          itemKey={toJS(userInfoState.maritalState)}
          items={[
            { label: "نامزد", key: "namzad" },
            { label: "عقد", key: "aghed" },
            { label: "عقد دائم", key: "aghedDayem" },
            { label: "ازدواج موقت", key: "movaghat" },
            { label: "تعدد زوجات", key: "wives" },
            { label: "متارکه", key: "motarekeh" },
            { label: "مطلقه", key: "motalagheh" },
            { label: "بیوه", key: "widow" },
          ]}
          onItemSelected={(item) => {
            userInfoState.setMaritalState(item.key);
          }}
        />
        <ScrollPicker
          title={"تحصیلات"}
          itemKey={toJS(userInfoState.education)}
          items={[
            { label: "بی سواد", key: "uneducated" },
            { label: "زیر سن مدرسه", key: "underAged" },
            { label: "سن پیش دبستانی", key: "preSchool" },
            { label: "ابتدایی", key: "school" },
            { label: "راهنمایی", key: "preHighSchool" },
            { label: "دبیرستان", key: "highSchool" },
            { label: "ترک تحصیل ابتدایی", key: "dropoutPreSchool" },
            { label: "ترک تحصیل راهنمایی", key: "dropoutSchool" },
            { label: "ترک تحصیل دبیرستان", key: "dropoutHighSchool" },
            { label: "دیپلم و پیش دانشگاهی", key: "diploma" },
            { label: "دارای مدرک دانشگاهی", key: "graduate" },
            { label: "دانشجو", key: "student" },
            { label: "مدرک حوزوی", key: "clergyman" },
          ]}
          onItemSelected={(item) => {
            userInfoState.setEducation(item.key);
          }}
        />
        {userInfoState.education === "student" ||
        userInfoState.education === "graduate" ? (
          <Input
            mode={"with-label"}
            title={"رشته تحصیلی"}
            placeholder={"رشته تحصیلی خود را وارد کنید"}
            value={userInfoState.academicField}
            onChangeText={(text) => {
              userInfoState.setAcademicField(text);
            }}
          />
        ) : null}
        <ScrollPicker
          title={"دین"}
          itemKey={toJS(userInfoState.religion)}
          items={[
            { label: "اسلام شیعه", key: "islamShia" },
            { label: "اسلام سنی", key: "islamSunny" },
            { label: "زرتشتی", key: "zoroastrianism" },
            { label: "مسیحی", key: "christianity" },
            { label: "سایر", key: "other" },
          ]}
          onItemSelected={(item) => {
            userInfoState.setReligion(item.key);
          }}
        />
        <Input
          mode={"with-label"}
          title={"شغل"}
          placeholder={"شغل خود را وارد کنید"}
          value={userInfoState.job}
          onChangeText={(text) => {
            userInfoState.setJob(text);
          }}
        />
        <Input
          mode={"with-label"}
          title={"بیماری جسمی"}
          placeholder={"بیماری جسمی خود را وارد کنید"}
          value={userInfoState.bodyDiseases}
          onChangeText={(text) => {
            userInfoState.setBodyDiseases(text);
          }}
        />
        <Input
          mode={"with-label"}
          title={"بیماری روحی"}
          placeholder={"بیماری روحی خود را وارد کنید"}
          value={userInfoState.mindDiseases}
          onChangeText={(text) => {
            userInfoState.setMindDiseases(text);
          }}
        />
        {/* TODO: family diseases if exists */}
        <Input
          mode={"with-label"}
          title={"بیماری افراد خانواده"}
          placeholder={"بیماری افراد خانواده را برای هر شخص وارد کنید"}
          multiline
          numberOfLines={6}
          // value=
        />
        <Input
          mode={"with-label"}
          title={"مصرف دارو"}
          placeholder={"در صورتی که دارو مصرف می کنید آن را وارد کنید"}
          value={userInfoState.drugUse}
          onChangeText={(text) => {
            userInfoState.setDrugUse(text);
          }}
        />
        <Input
          mode={"with-label"}
          title={"اعتیاد"}
          placeholder={"اعتیاد را وارد کنید"}
          value={userInfoState.addiction}
          onChangeText={(text) => {
            userInfoState.setAddiction(text);
          }}
        />
        <TwoChoice
          title={"پدر در قید حیات هستند؟"}
          choiceState={userInfoState.isFatherAliveText}
          firstChoice={"بله"}
          secondChoice={"خیر"}
          onFirstChoicePress={() => {
            userInfoState.setIsFatherAlive(true);
          }}
          onSecondChoicePress={() => {
            userInfoState.setIsFatherAlive(false);
          }}
        />

        {userInfoState.isFatherAlive === false ? (
          <Input
            mode={"with-label"}
            title={"علت فوت پدر"}
            placeholder={"علت فوت پدر را وارد کنید"}
            value={userInfoState.fatherDeathReason}
            onChangeText={(text) => {
              userInfoState.setFatherDeathReason(text);
            }}
          />
        ) : null}
        <TwoChoice
          title={"مادر در قید حیات هستند؟"}
          choiceState={userInfoState.isMotherAliveText}
          firstChoice={"بله"}
          secondChoice={"خیر"}
          onFirstChoicePress={() => {
            userInfoState.setIsMotherAlive(true);
          }}
          onSecondChoicePress={() => {
            userInfoState.setIsMotherAlive(false);
          }}
        />
        {userInfoState.isMotherAlive === false ? (
          <Input
            mode={"with-label"}
            title={"علت فوت مادر"}
            placeholder={"علت فوت مادر را وارد کنید"}
            value={userInfoState.motherDeathReason}
            onChangeText={(text) => {
              userInfoState.setMotherDeathReason(text);
            }}
          />
        ) : null}
        <TwoChoice
          title={"ازدواج فامیلی؟"}
          choiceState={userInfoState.cousinMarriageText}
          firstChoice={"بله"}
          secondChoice={"خیر"}
          onFirstChoicePress={() => {
            userInfoState.setCousinMarriage(true);
          }}
          onSecondChoicePress={() => {
            userInfoState.setCousinMarriage(false);
          }}
        />
        <Input
          mode={"with-label"}
          title={"فرزند چندم"}
          placeholder={"فرزند چندم را وارد کنید"}
          textAlign={"right"}
          keyboardType={"number-pad"}
          value={userInfoState.siblingsPosition}
          onChangeText={(text) => {
            userInfoState.setSiblingsPosition(text);
          }}
        />
        <Input
          mode={"with-label"}
          title={"شرح برادر و خواهر"}
          placeholder={"چنتایید چطوری"}
          multiline
          numberOfLines={6}
          value={userInfoState.siblings}
          onChangeText={(text) => {
            userInfoState.setSiblings(text);
          }}
        />
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"wide"}
          onPress={async () => {
            const result = await updateUserProfile();
            console.log(result);
          }}
        >
          {"ثبت اطلاعات"}
        </Button>
      </Scroller>
    </Container>
  );
}

export const UserInfo = observer(UserInfoScreen);
