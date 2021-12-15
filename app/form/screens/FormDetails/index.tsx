import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Button, Paragraph, Subheading, THEME, Title } from "../../../library";
import { FormNumberIcon, TimerIcon } from "../../../library/Icon";
import BottomSheet, {
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { styles } from "./style";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { widthPercentageToDP } from "react-native-responsive-screen";
const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animatedIndex.value,
        [-1, 0, 1],
        [0, 0.9, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "rgba(0,0,0,0.42)",
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return <Animated.View style={containerStyle} />;
};
const FormCount = 93;
export function FormDetails() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["40%", "40"], []);

  const handleSnapPress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  const onCollapsePress = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "تست MBTI",
      headerTitleAlign: "center",
      headerTitle: (props) => (
        <Paragraph style={{ fontSize: 18, top: 4, color: "white" }}>
          {props.children}
        </Paragraph>
      ),
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
              source={require("../../assets/Neo.png")}
              resizeMode={"stretch"}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Title>{"تست بریگز و مایرز"}</Title>
            <Subheading style={{ textAlign: "right", top: 10 }}>
              {"Myers–Briggs Type Indicator"}
            </Subheading>
          </View>
          <View style={styles.descriptionContainer}>
            <Paragraph style={{ color: "#727272" }}>
              {`در نظریه یونگ، هشت الگوی رفتاری انسان معرفی شد. بریگز و مایرز ایده‌های یونگ را در مورد این الگوهای ذهنی توسعه دادند و در نهایت نقش آنها را در مفهوم و توصیف انواع شخصیت‌ها در تست MBTI گنجاندند. تست بریگز و مایرز نوعی ارزیابی است که در آن شخصیت فرد را با توجه به چهار معیار اصلی مورد بررسی قرار می‌گیرد که در آن هر حرف مربوط به یک اولویت یا گرایش شخصیتی خاص است. این معیارها برون گرا یا درون گرا بودن، شهودی یا حسی بوده، ادراکی یا قضاوتی بودن و در نهایت احساسی یا منطقی بودن هستند.`}{" "}
            </Paragraph>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.formDetails}>
          <View style={styles.formDetailsBody}>
            <Paragraph style={{ color: "#727272", right: 10 }}>
              {"تعداد تست ها: "} <Paragraph>{FormCount}</Paragraph>
            </Paragraph>
            <TimerIcon size={24} />
          </View>
          <View style={styles.formDetailsBody}>
            <Paragraph style={{ color: "#727272", right: 8 }}>
              {"زمان لازم: "} <Paragraph>{"۱۰ دقیقه"}</Paragraph>
            </Paragraph>
            <FormNumberIcon size={24} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            zIndex: 0,
          }}
        >
          <Button
            mode={"contained"}
            size={"big"}
            rippleColor={"lightGrey"}
            onPress={() => {
              onCollapsePress();
            }}
          >
            {"شروع تست"}
          </Button>
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
        backdropComponent={CustomBackdrop}
        enablePanDownToClose={true}
      >
        <BottomSheetView
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            zIndex: 1000,
          }}
        >
          <View style={{ width: widthPercentageToDP(90), top: 10 }}>
            <Title style={{ textAlign: "center" }}>{"شروع تست"}</Title>
            <Subheading style={{ textAlign: "center", top: 10 }}>
              {
                "آیا میخواهید از جایی که قبلا خارج شدید ادامه دهید یا از اول شروع میکنید؟"
              }
            </Subheading>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "space-evenly",
              top: 40,
            }}
          >
            <Button
              mode={"contained-grey"}
              size={"medium"}
              rippleColor={"lightGrey"}
              onPress={() => {
                navigation.push("Questionnaire");
                handleSnapPress();
              }}
            >
              {"شروع از اول"}
            </Button>
            <Button
              mode={"contained"}
              size={"medium"}
              rippleColor={"lightGrey"}
              onPress={() => {
                navigation.push("Questionnaire");
                handleSnapPress();
              }}
            >
              {"ادامه میدهم"}
            </Button>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
