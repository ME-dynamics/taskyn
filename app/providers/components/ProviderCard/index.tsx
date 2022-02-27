import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import {
  Button,
  Caption,
  CustomBackdrop,
  Paragraph,
  TaskynIcon,
} from "../../../library";
import { createRequest, removeProvider, removeRequest } from "../../usecases";

import { styles, iconColor } from "./styles";
import { IProviderCardProps } from "../../types";
import { providerState } from "../../entities";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SuccessAlert } from "../../../library/SuccessAlert";

function ProviderCardComponent(props: IProviderCardProps) {
  const { id, fullName, profileImageUrl, description, myDoctor } = props;
  const snapPointsModal = useMemo(() => [150, 180], []);
  const BottomSheetModalRef = useRef<BottomSheetModal>(null);
  const close = useCallback(() => {
    BottomSheetModalRef.current?.close();
  }, []);
  const onCollapsePressModal = useCallback(() => {
    BottomSheetModalRef.current?.present();
  }, []);
  function buttonMode() {
    if (myDoctor === false) {
      return requestText;
    }
    if (myDoctor && providerState.requestConfirmed === false) {
      return cancelRequestText;
    }
    if (myDoctor && providerState.requestConfirmed) {
      return cancelConnectionText;
    }
    return "";
  }
  const requestText = "درخواست اتصال";
  const cancelRequestText = "لغو درخواست";
  const cancelConnectionText = "لغو اتصال";

  // const providerConnection = providerState.requestConfirmed
  //   ? cancelConnectionText
  //   : cancelRequestText;
  const [loading, setLoading] = useState<boolean>(false);
  async function onPress() {
    const mode = buttonMode();
    setLoading(true);
    if (mode === requestText) {
      const nameMustBeDefined = await createRequest(id);
      if (nameMustBeDefined) {
        onCollapsePressModal();
      }
    } else if (mode === cancelRequestText) {
      await removeRequest();
    } else if (mode === cancelConnectionText) {
      await removeProvider(id);
    }
    // myDoctor ? await removeRequest() : await createRequest(id);
    setLoading(false);
  }
  function renderAvatar() {
    if (profileImageUrl) {
      return (
        <Image style={styles.profileImage} source={{ uri: profileImageUrl }} />
      );
    }
    return <TaskynIcon name={"profile"} color={iconColor} size={24} boxed />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.profileContainer}>{renderAvatar()}</View>
        <View style={styles.infoContainer}>
          <Paragraph>{fullName}</Paragraph>
          <Caption>{description}</Caption>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {
          <Button
            mode={"contained"}
            rippleColor={"lightGrey"}
            size={"extra-small"}
            disabled={providerState.requestConfirmed && myDoctor === false}
            fullRadius
            loading={loading}
            onPress={onPress}
          >
            {buttonMode()}
          </Button>
        }
      </View>
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
        <SuccessAlert
          onClosePress={close}
          title={"در بخش پروفایل و یا پرونده بیمار، اسم خود را وارد کنید"}
        />
      </BottomSheetModal>
    </View>
  );
}

export const ProviderCard = observer(ProviderCardComponent);
