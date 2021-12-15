import { Entypo } from "@expo/vector-icons";
import React, { useCallback, useMemo, useRef } from "react";
import { View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { widthPercentageToDP } from "react-native-responsive-screen";
import {
  Button,
  Input,
  Paragraph,
  Tap,
  THEME,
  Title,
  Touchable,
  WebIcon,
} from "../../../library";
import BottomSheet, {
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { styles } from "./styles";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
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

export function EditProfile() {
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
  return (
    <KeyboardAwareScrollView style={styles.container} scrollEnabled={false}>
      <View style={styles.imageContainer}>
        {/* <Image
          source={require("../../../../assets/image/unknown.png")}
          resizeMode={"cover"}
          style={{ width: 120, height: 120 }}
        /> */}
        <View style={styles.cameraIconContainer}>
          <Tap
            onPress={() => {
              onCollapsePress();
            }}
          >
            <Entypo
              name="camera"
              size={22}
              color={THEME.COLORS.PRIMARY.NORMAL}
            />
          </Tap>
          {/* <Touchable
            rippleColor={"lightGrey"}
            onPress={() => {
              onCollapsePress();
            }}
          /> */}
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Input mode={"flat"} title={"نام"} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          size={"big"}
          rippleColor={"lightGrey"}
          onPress={() => {
            console.log("s");
          }}
        >
          {"ذخیره"}
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
        <BottomSheetView
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            zIndex: 1000,
          }}
        >
          <View style={{ width: widthPercentageToDP(90), top: 10 }}>
            <Title style={{ textAlign: "right" }}>{"انتخاب عکس پروفایل"}</Title>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              // justifyContent: "space-evenly",
              top: 40,
            }}
          >
            <View style={styles.sheetButtonContainer}>
              <Paragraph style={{ paddingRight: 10 }}>
                {"عکس از دوربین"}
              </Paragraph>
              <WebIcon size={24} />
              <Touchable rippleColor={"lightGrey"} onPress={() => {}} />
            </View>
            <View style={styles.sheetButtonContainer}>
              <Paragraph style={{ paddingRight: 10 }}>
                {"عکس از گالری"}
              </Paragraph>
              <WebIcon size={24} />
              <Touchable rippleColor={"lightGrey"} onPress={() => {}} />
            </View>
            {/* <Button
              mode={"text"}
              size={"FAB"}
              rippleColor={"lightGrey"}
              Icon={WebIcon}
            >
              {"عکس از گالری"}
            </Button> */}
            {/* <Button
              mode={"text"}
              size={"FAB"}
              rippleColor={"lightGrey"}
              Icon={WebIcon}
              onPress={() => {
                handleSnapPress();
              }}
            >
              {"عکس از دوربین"}
            </Button> */}
          </View>
        </BottomSheetView>
      </BottomSheet>
    </KeyboardAwareScrollView>
  );
}
