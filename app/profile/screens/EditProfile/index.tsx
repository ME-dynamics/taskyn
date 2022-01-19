import React, { useCallback, useMemo, useRef } from "react";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { observer } from "mobx-react-lite";
import { Button, Input, Container, Scroller } from "../../../library";

import { Avatar, CustomBackdrop, PickImageSheet } from "../../components";
import { profileState } from "../../entities";
import { updateUser } from "../../usecases";

import { styles } from "./styles";

function EditProfileScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "30%"], []);

  const onCollapsePress = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);

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
              onPress={updateUser}
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
    </>
  );
}

export const EditProfile = observer(EditProfileScreen);
