import React, { useCallback, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import { observer } from "mobx-react-lite";
import {
  Button,
  Input,
  Container,
  Scroller,
  CustomBackdrop,
} from "../../../library";

import { Avatar, PickImageSheet } from "../../components";
import { profileState } from "../../entities";
import { updateUser } from "../../usecases";

import { styles } from "./styles";
import { SuccessAlert } from "../../../library/SuccessAlert";

function EditProfileScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [updateUserLoading, setUpdateUserLoading] = useState(false);
  const snapPoints = useMemo(() => ["30%", "30%"], []);
  const snapPointsModal = useMemo(() => [150, 180], []);
  const BottomSheetModalRef = useRef<BottomSheetModal>(null);
  const onCollapsePress = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);
  const close = useCallback(() => {
    BottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePressModal = useCallback(() => {
    BottomSheetModalRef.current?.present();
  }, []);
  async function onPress() {
    setUpdateUserLoading(true);
    await updateUser(); // TODO: handle error
    setUpdateUserLoading(false);
    onCollapsePressModal();
    return;
  }
  return (
    <>
      <Container>
        <Scroller gestureScroll>
          <View style={styles.profileImageContainer}>
            <Avatar
              uri={profileState.avatar}
              size={120}
              edit
              onEditPress={onCollapsePress}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              mode={"outlined"}
              textAlign={"right"}
              title={"نام"}
              value={profileState.firstName}
              onChangeText={(text) => {
                profileState.setFirstName(text);
              }}
            />
            <Input
              mode={"outlined"}
              textAlign={"right"}
              title={"نام خانوادگی"}
              value={profileState.lastName}
              onChangeText={(text) => {
                profileState.setLastName(text);
              }}
            />
            <Input
              mode={"outlined"}
              textAlign={"right"}
              title={"درباره ی خود"}
              value={profileState.description}
              onChangeText={(text) => {
                profileState.setDescription(text);
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode={"contained"}
              size={"wide"}
              rippleColor={"lightGrey"}
              onPress={onPress}
              loading={updateUserLoading}
            >
              {"ذخیره"}
            </Button>
          </View>
        </Scroller>
      </Container>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={CustomBackdrop}
        enablePanDownToClose
      >
        <PickImageSheet />
      </BottomSheet>
      <BottomSheetModal
        ref={BottomSheetModalRef}
        snapPoints={snapPointsModal}
        backdropComponent={CustomBackdrop}
        detached={true}
        bottomInset={250}
        style={styles.modal}
        index={1}
        enablePanDownToClose
      >
        <SuccessAlert onClosePress={close} />
      </BottomSheetModal>
    </>
  );
}

export const EditProfile = observer(EditProfileScreen);
