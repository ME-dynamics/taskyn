import React, { useCallback, useMemo, useRef } from "react";
import { View, Image, Alert } from "react-native";
import {
  Button,
  openCamera,
  openCropper,
  openGallery,
  Subheading,
  Tap,
  Title,
} from "../../../library";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import { MenuItem } from "../../components/MenuItem";
import { styles } from "./styles";
import { IIconProps } from "./types";
import { Headline } from "../../../library";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { widthPercentageToDP } from "react-native-responsive-screen";
export const Profile = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "50%"], []);

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
  const renderSupportAgent = (props: IIconProps) => {
    const { color, size } = props;
    return <MaterialIcons name={"support-agent"} size={size} color={color} />;
  };
  const renderInfocirlceo = (props: IIconProps) => {
    const { color, size } = props;
    return <AntDesign name={"infocirlceo"} size={size} color={color} />;
  };
  const renderQuestiOnCircleo = (props: IIconProps) => {
    const { color, size } = props;
    return <AntDesign name={"questioncircleo"} size={size} color={color} />;
  };
  const renderExitOutline = (props: IIconProps) => {
    const { color, size } = props;
    return <Ionicons name={"exit-outline"} size={size} color={"#B71C1C"} />;
  };
  const renderClipboardNotes = (props: IIconProps) => {
    const { color, size } = props;
    return <Feather name="file-text" size={size} color={color} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Headline style={[styles.title, { top: 14 }]}>{"پروفایل"}</Headline>
        <Image
          style={styles.avatar}
          source={require("../../../../assets/image/unknown.png")}
        />
        <Headline style={[styles.title, { bottom: 14 }]}>
          {"سجاد سیف اله"}
        </Headline>
      </View>
      <View style={styles.bodyContainer}>
        <MenuItem
          Icon={renderSupportAgent}
          title="ویرایش پروفایل"
          onPress={() => navigation.push("EditProfile")}
          line={true}
        />
        <MenuItem
          Icon={renderInfocirlceo}
          title="پشتیبانی"
          onPress={() => navigation.push("Support")}
          line={true}
        />
        <MenuItem
          Icon={renderInfocirlceo}
          title="درباره ما"
          onPress={() => {
            navigation.push("AboutUs");
          }}
          line={true}
        />
        <MenuItem
          Icon={renderQuestiOnCircleo}
          title="سوالات متداول"
          onPress={() => navigation.push("FrequentlyQuestions")}
          line={true}
        />
        <MenuItem
          Icon={renderClipboardNotes}
          title="شرایط و قوانین"
          onPress={() => Alert.alert("hi1")}
          line={true}
        />

        <MenuItem
          Icon={renderExitOutline}
          style={{ backgroundColor: "#E7D9D8" }}
          title="خروج از حساب کاربری"
          onPress={() => {
            onCollapsePress();
          }}
          line={false}
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
        enablePanDownToClose={true}
      >
        <BottomSheetView
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View style={{ width: widthPercentageToDP(90), top: 10 }}>
            <Title style={{ textAlign: "center" }}>
              {"خروج از حساب کاربری"}
            </Title>
            <Subheading style={{ textAlign: "center", top: 10 }}>
              {"آیا میخواهید از حساب خود خارج شوید؟"}
            </Subheading>
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "space-evenly",
              top: 40,
            }}
          >
            <Button
              mode={"outlined"}
              size={"medium"}
              rippleColor={"lightGrey"}
              color={"grey"}
              onPress={() => {
                handleSnapPress();
              }}
            >
              {"انصراف"}
            </Button>
            <Button
              mode={"contained"}
              size={"medium"}
              rippleColor={"lightGrey"}
            >
              {"ادامه میدهم"}
            </Button>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};
