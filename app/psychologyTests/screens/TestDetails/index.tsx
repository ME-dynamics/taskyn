import React, { useCallback, useMemo, useRef, useEffect } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import BottomSheet from "@gorhom/bottom-sheet";
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
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "30%"], []);

  const onCollapsePress = useCallback(() => {
    bottomSheetRef.current?.collapse();
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
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/Neo.png")}
          resizeMode={"stretch"}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Title>{testDetailState.test.title.fa}</Title>
        <Subheading style={styles.enTitle}>
          {testDetailState.test.title.en}
        </Subheading>
      </View>
      <View style={styles.descriptionContainer}>
        <Scroller
          gestureScroll
          contentContainerStyle={styles.descriptionScrollViewContent}
        >
          <Paragraph>{testDetailState.test.description}</Paragraph>
        </Scroller>
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
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
        backdropComponent={CustomBackdrop}
        enablePanDownToClose={true}
      >
        <TestHistorySheet navigateToQuestionnaire={navigateToQuestionnaire} />
      </BottomSheet>
    </Container>
  );
}

export const TestDetails = observer(TestDetailsScreen);
