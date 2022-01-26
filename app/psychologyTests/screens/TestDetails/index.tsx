import React, { useCallback, useMemo, useRef, useEffect } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import {
  Button,
  Paragraph,
  Subheading,
  Title,
  TaskynIcon,
  CustomBackdrop,
  Container,
  Scroller,
} from "../../../library";

import { TestHistorySheet } from "../../components";
import { testDetailState } from "../../entities";
import { retrieveTestDetail, testSessionExists } from "../../usecases";

import { styles, iconStyle } from "./styles";
type TestStackParamList = {
  testList: undefined;
  testDetails: { id: string };
  questionnaire: undefined;
  mbtiResult: undefined;
};
type RouteParams = RouteProp<TestStackParamList, "testDetails">;

export function TestDetailsScreen() {
  const route = useRoute<RouteParams>();
  const navigator = useNavigation<NativeStackNavigationProp<any>>();
  const BottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["40%", "40%"], []);
  const close = useCallback(() => {
    BottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePress = useCallback(() => {
    BottomSheetModalRef.current?.present();
  }, []);
  function navigateToQuestionnaire() {
    navigator.push("questionnaire", { id: route.params.id });
  }
  function onStartTestPress() {
    if (testSessionExists(testDetailState.test.id)) {
      onCollapsePress();
      return;
    }
    navigateToQuestionnaire();
  }
  useEffect(() => {
    // navigator.setOptions({ headerTitle: route.params.id });
    retrieveTestDetail(route.params.id);
    return () => {
      // testDetailState.reset();
    };
  }, []);
  return (
    <Container>
      <Scroller>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../Constant/MBTI.png")}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Title>{testDetailState.test.title.fa}</Title>
          <Subheading style={styles.enTitle}>
            {testDetailState.test.title.en}
          </Subheading>
        </View>
        <View style={styles.descriptionContainer}>
          {/*  get from server */}
          {/* <Paragraph>{testDetailState.test.description}</Paragraph> */}
          <Paragraph>
            {
              "در نظریه یونگ، هشت الگوی رفتاری انسان معرفی شد. بریگز و مایرز ایده‌های یونگ را در مورد این الگوهای ذهنی توسعه دادند و در نهایت نقش آنها را در مفهوم و توصیف انواع شخصیت‌ها در تست MBTI گنجاندند. تست بریگز و مایرز نوعی ارزیابی است که در آن شخصیت فرد را با توجه به چهار معیار اصلی مورد بررسی قرار می‌گیرد که در آن هر حرف مربوط به یک اولویت یا گرایش شخصیتی خاص است. این معیارها برون گرا یا درون گرا بودن، شهودی یا حسی بوده، ادراکی یا قضاوتی بودن و در نهایت احساسی یا منطقی بودن هستند."
            }
          </Paragraph>
        </View>
        <View style={styles.formDetails}>
          <View style={styles.formDetailsBody}>
            <Paragraph style={styles.timeNeeded}>
              {"زمان لازم: "} <Paragraph>{"۱۰ دقیقه"}</Paragraph>
            </Paragraph>
            <TaskynIcon
              name={"timer"}
              size={iconStyle.size}
              color={iconStyle.color}
            />
          </View>
          <View style={styles.formDetailsBody}>
            <Paragraph style={styles.testCount}>
              {"تعداد تست ها: "}
              <Paragraph>
                {Object.keys(testDetailState.test.fields).length}
              </Paragraph>
            </Paragraph>
            <TaskynIcon
              name={"task"}
              size={iconStyle.size}
              color={iconStyle.color}
            />
          </View>
        </View>
        <View style={styles.startTestContainer}>
          <Button
            mode={"contained"}
            size={"wide"}
            rippleColor={"lightGrey"}
            onPress={onStartTestPress}
          >
            {"شروع تست"}
          </Button>
        </View>
        <BottomSheetModal
          ref={BottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          // onChange={handleSheetChanges}
          backdropComponent={CustomBackdrop}
          enablePanDownToClose={true}
        >
          <TestHistorySheet
            navigateToQuestionnaire={navigateToQuestionnaire}
            onClosePress={close}
          />
        </BottomSheetModal>
      </Scroller>
    </Container>
  );
}

export const TestDetails = observer(TestDetailsScreen);
