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
import { retrieveTestDetail } from "../../usecases";

import { styles } from "./styles";

export function TestDetailsScreen() {
  const route = useRoute();
  const navigator = useNavigation<NativeStackNavigationProp<any>>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "30%"], []);

  const handleSnapPress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  const onCollapsePress = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  useEffect(() => {
    navigator.setOptions({ headerTitle: route.params.id });
    retrieveTestDetail(route.params.id);
    return () => {
      testDetailState.reset();
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
        <Subheading style={{ textAlign: "right", top: 10 }}>
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
      <View style={styles.buttonContainer}>
        <View style={styles.formDetails}>
          <View style={styles.formDetailsBody}>
            <Paragraph style={{ color: "#727272", right: 10 }}>
              {"تعداد تست ها: "}
              <Paragraph>
                {Object.keys(testDetailState.test.fields).length}
              </Paragraph>
            </Paragraph>
            <TaskynIcon name={"timer"} size={24} color={"red"} />
          </View>
          <View style={styles.formDetailsBody}>
            <Paragraph style={{ color: "#727272", right: 8 }}>
              {"زمان لازم: "} <Paragraph>{"۱۰ دقیقه"}</Paragraph>
            </Paragraph>
            <TaskynIcon name={"task"} size={24} color={"red"} />
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
            size={"wide"}
            rippleColor={"lightGrey"}
            onPress={() => {
              // check if test is already started
              // set correct state
              // onCollapsePress();\
              navigator.push("questionnaire");
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
        <TestHistorySheet />
      </BottomSheet>
    </Container>
  );
}

export const TestDetails = observer(TestDetailsScreen);
