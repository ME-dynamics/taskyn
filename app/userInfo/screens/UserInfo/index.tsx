import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { observer } from "mobx-react-lite";
import { useNavigation, useRoute } from "@react-navigation/native";
import { toJS } from "mobx";
import {
  Button,
  Input,
  Container,
  Scroller,
  CustomBackdrop,
} from "../../../library";

import { TwoChoice, ScrollPicker } from "../../components";
import { userInfoState } from "../../entities";
import { updateUserProfile, retrieveUserProfile } from "../../usecases";

import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BirthDayInput } from "../../components/BirthDayInput";
import type { IBirthDay } from "../../types";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SuccessAlert } from "../../../library/SuccessAlert";

function UserInfoScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const route = useRoute();
  const [loading, setLoading] = useState<boolean>(true);
  const [editable, setEditable] = useState<boolean>(false);
  const [updateUserLoading, setUpdateUserLoading] = useState<boolean>(false);

  const snapPoints = useMemo(() => [150, 180], []);
  const BottomSheetModalRef = useRef<BottomSheetModal>(null);

  const close = useCallback(() => {
    BottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePress = useCallback(() => {
    BottomSheetModalRef.current?.present();
  }, []);
  function renderEditButton(props: { tintColor?: string }) {
    const { tintColor } = props;
    const save = "ذخیره";
    const edit = "ویرایش";

    async function onPress() {
      if (editable) {
        setUpdateUserLoading(true);
        await updateUserProfile(); // TODO: handle error
        setUpdateUserLoading(false);
        onCollapsePress();
        setEditable(false);
        return;
      }
      setEditable(true);
    }
    return (
      <Button
        mode={"text"}
        size={"growWithText"}
        rippleColor={"lightGrey"}
        textColor={"white"}
        onPress={onPress}
        loading={updateUserLoading}
      >
        {editable ? save : edit}
      </Button>
    );
  }

  navigation.setOptions({
    headerRight: renderEditButton,
  });
  useEffect(() => {
    async function prepare() {
      // @ts-expect-error
      const id = route.params?.id;
      await retrieveUserProfile(id);
      setLoading(false);
    }
    prepare();
  }, []);
  return (
    <Container loading={loading}>
      <Scroller
        contentContainerStyle={styles.scrollViewContentContainer}
        keyboardDismissMode={"none"}
        keyboardShouldPersistTaps={"handled"}
        gestureScroll
      >
        <Input
          editable={editable}
          mode={"with-label"}
          title={"نام"}
          placeholder={"نام خود را وارد کنید."}
          value={userInfoState.firstName}
          onChangeText={(text) => {
            userInfoState.setFirstName(text);
          }}
        />
        <Input
          editable={editable}
          mode={"with-label"}
          title={"نام خانوادگی"}
          placeholder={"نام خانوادگی خود را وارد کنید."}
          value={userInfoState.lastName}
          onChangeText={(text) => {
            userInfoState.setLastName(text);
          }}
        />
        {/* <Input
          editable={editable}
          mode={"with-label"}
          title={"تاریخ تولد"}
          placeholder={"مثال: ۱۴۰۰۱/۰۰/۰۰"}
          // textAlign={"center"}
          value={userInfoState.birthday}
          onChangeText={(text) => {
            userInfoState.setBirthday(text);
          }}
        /> */}
        <Input
          editable={editable}
          mode={"with-label"}
          title={"آدرس"}
          multiline
          numberOfLines={2}
          placeholder={"آدرس خود را وارد کنید."}
          value={userInfoState.address}
          onChangeText={(text) => {
            userInfoState.setAddress(text);
          }}
        />
        <Input
          editable={editable}
          mode={"with-label"}
          title={"تلفن ثابت"}
          placeholder={"مثال: ۰۲۱۲۳۴۵۶۷۸۹"}
          // textAlign={"center"}
          value={userInfoState.telephone}
          onChangeText={(text) => {
            userInfoState.setTelephone(text);
          }}
        />
        <Input
          editable={editable}
          mode={"with-label"}
          title={"شرح مشکل / علت مراجعه"}
          placeholder={"مشکل خود را به طور کامل شرح دهید."}
          value={userInfoState.problemDescription}
          onChangeText={(text) => {
            userInfoState.setProblemDescription(text);
          }}
        />
        <BirthDayInput
          onBirthdayChange={(birthDay: IBirthDay) => {
            userInfoState.setBirthday(
              `${birthDay.day}-${birthDay.month}-${birthDay.year}`
            );
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
            editable={editable}
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
          editable={editable}
          mode={"with-label"}
          multiline
          numberOfLines={2}
          title={"شغل"}
          placeholder={
            "عنوان دقیق شغل نوشته شود بدون اشاره به شغل آزاد، دانش آموز و دانشجو."
          }
          value={userInfoState.job}
          onChangeText={(text) => {
            userInfoState.setJob(text);
          }}
        />
        <Input
          editable={editable}
          mode={"with-label"}
          title={"بیماری جسمی"}
          multiline
          numberOfLines={1}
          placeholder={
            "بیماری جسمی خود را بنویسید و در صورت نیاز آن را شرح دهید."
          }
          value={userInfoState.bodyDiseases}
          onChangeText={(text) => {
            userInfoState.setBodyDiseases(text);
          }}
        />
        <Input
          editable={editable}
          mode={"with-label"}
          title={"بیماری روحی خود را بنویسید و در صورت نیاز آن را شرح دهید."}
          placeholder={"بیماری روحی خود را وارد کنید"}
          value={userInfoState.mindDiseases}
          onChangeText={(text) => {
            userInfoState.setMindDiseases(text);
          }}
        />
        {/* TODO: family diseases if exists */}
        <Input
          editable={editable}
          mode={"with-label"}
          title={"بیماری افراد خانواده"}
          placeholder={`بیماری افراد خانواده را برای هر شخص وارد کنید.
مثال: برادر اولم دچار بیماری سرطانی است.`}
          multiline
          numberOfLines={6}

          // value=
        />
        <Input
          editable={editable}
          mode={"with-label"}
          title={"مصرف دارو"}
          placeholder={"در صورتی که دارو مصرف می کنید آن را وارد کنید."}
          value={userInfoState.drugUse}
          onChangeText={(text) => {
            userInfoState.setDrugUse(text);
          }}
        />
        <Input
          editable={editable}
          mode={"with-label"}
          title={"اعتیاد"}
          placeholder={`موارد اعتیاد خود را بنویسید.
مثال: وابستگی به الکل،اعتیاد به سیگار و قلیون`}
          value={userInfoState.addiction}
          multiline
          numberOfLines={1}
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
            editable={editable}
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
            editable={editable}
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
          editable={editable}
          mode={"with-label"}
          title={"فرزند چندم"}
          placeholder={"فرزند چندم خانواده هستید."}
          textAlign={"right"}
          keyboardType={"number-pad"}
          value={userInfoState.siblingsPosition}
          onChangeText={(text) => {
            userInfoState.setSiblingsPosition(text);
          }}
        />
        <Input
          editable={editable}
          mode={"with-label"}
          title={"شرح برادر و خواهر"}
          placeholder={
            "تعداد و وضعیت رابطه خود را با برادر و خواهرتان شرح دهید."
          }
          multiline
          numberOfLines={6}
          value={userInfoState.siblings}
          onChangeText={(text) => {
            userInfoState.setSiblings(text);
          }}
        />
      </Scroller>
      <BottomSheetModal
        ref={BottomSheetModalRef}
        snapPoints={snapPoints}
        backdropComponent={CustomBackdrop}
        detached={true}
        bottomInset={250}
        style={styles.modal}
        index={1}
        enablePanDownToClose
        
      >
        <SuccessAlert onClosePress={close} />
      </BottomSheetModal>
    </Container>
  );
}

export const UserInfo = observer(UserInfoScreen);
