import { Entypo } from "@expo/vector-icons";
import React, { useCallback, useMemo, useRef } from "react";
import { View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Button, Input, Subheading, Tap, THEME, Title } from "../../../library";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { styles } from "./styles";
export function EditProfile() {
  return (
    <>
      <KeyboardAwareScrollView style={styles.container} scrollEnabled={false}>
        <View style={styles.imageContainer}>
          {/* <Image
          source={require("../../../../assets/image/unknown.png")}
          resizeMode={"cover"}
          style={{ width: 120, height: 120 }}
        /> */}
          <Tap onPress={() => {}}>
            <View style={styles.cameraIconContainer}>
              <Entypo
                name="camera"
                size={22}
                color={THEME.COLORS.PRIMARY.NORMAL}
              />
            </View>
          </Tap>
        </View>
        <View style={styles.inputContainer}>
          <Input mode={"flat"} title={"نام"} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode={"contained"}
            size={"big"}
            rippleColor={"lightGrey"}
            onPress={() => {}}
          >
            {"ذخیره"}
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}
