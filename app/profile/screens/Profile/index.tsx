import React, { useCallback, useMemo, useRef, useEffect } from "react";
import { View, Alert } from "react-native";
import { observer } from "mobx-react-lite";
import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Container,
  Headline,
  Scroller,
  TaskynIcon,
  CustomBackdrop,
} from "../../../library";

import { MenuItem, Avatar, ExitSheet } from "../../components";
import { profileState } from "../../entities";
import { retrieveUser } from "../../usecases";

import { styles } from "./styles";

function ProfileScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const snapPoints = useMemo(() => ["30%", "30%"], []);

  const close = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  const onCollapsePress = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);
  useEffect(() => {
    retrieveUser();
  }, []);
  return (
    <Container>
      <View style={styles.header}>
        <Headline>{"پروفایل"}</Headline>
        <Avatar size={96} uri={profileState.avatar} />
        <Headline>{`${profileState.firstName} ${profileState.lastName}`}</Headline>
      </View>
      <View style={styles.menuContainer}>
        <Scroller gestureScroll>
          <MenuItem
            Icon={({ size, color }) => {
              return <TaskynIcon name={"profile"} size={size} color={color} />;
            }}
            title="ویرایش پروفایل"
            onPress={() => navigation.push("EditProfile")}
            line
          />
          <MenuItem
            Icon={({ size, color }) => {
              return (
                <TaskynIcon name={"headphones"} size={size} color={color} />
              );
            }}
            title="پشتیبانی"
            onPress={() => navigation.push("Support")}
            line
          />
          <MenuItem
            Icon={({ size, color }) => {
              return <TaskynIcon name={"info"} size={size} color={color} />;
            }}
            title="درباره ما"
            onPress={() => {
              navigation.push("AboutUs");
            }}
            line
          />
          <MenuItem
            Icon={({ size, color }) => {
              return (
                <TaskynIcon name={"help-circle"} size={size} color={color} />
              );
            }}
            title="سوالات متداول"
            onPress={() => navigation.push("FAQ")}
            line
          />
          <MenuItem
            Icon={({ size, color }) => {
              return <TaskynIcon name={"law"} size={size} color={color} />;
            }}
            title="شرایط و قوانین"
            onPress={() => Alert.alert("hi1")}
            line
          />

          <MenuItem
            Icon={({ size, color }) => {
              return <TaskynIcon name={"logout"} size={size} color={color} />;
            }}
            title="خروج از حساب کاربری"
            onPress={onCollapsePress}
            line
            logout
          />
        </Scroller>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={CustomBackdrop}
        index={-1}
        enablePanDownToClose
      >
        <ExitSheet onCancelPress={close} />
      </BottomSheet>
    </Container>
  );
}

export const Profile = observer(ProfileScreen);
