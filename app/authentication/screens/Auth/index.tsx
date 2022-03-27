import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { autorun } from "mobx";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Input,
  Button,
  Title,
  Logo,
  Paragraph,
  SelectButton,
  Container,
  Scroller,
  logger,
} from "../../../library";

import { authState, inputState } from "../../entities";
import { onPhoneChange, passwordlessStart } from "../../usecases";
import { styles, logoSize } from "./styles";
import { phone } from "./constant";

function AuthenticationScreen() {
  const navigator = useNavigation<NativeStackNavigationProp<any>>();
  const [agreed, setAgreed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  async function start() {
    try {
      setLoading(true);

      await passwordlessStart();
      setLoading(false);
    } catch (error) {
      logger({
        type: "error",
        container: "authentication",
        path: { section: "screens", file: "Auth/index.tsx" },
        logMessage: `passwordless start error: ${error}`,
      });
      setLoading(false);
    }
  }
  function toggleAgreement() {
    setAgreed(!agreed);
  }
  useEffect(() => {
    const disposer = autorun(() => {
      if (authState.otpToken && navigator.isFocused()) {
        navigator.push("Identify");
      }
    });
    return () => {
      disposer();
    };
  }, []);
  return (
    <Container>
      <Scroller keyboard scrollEnabled={false}>
        <View style={styles.titleContainer}>
          <View style={styles.logoContainer}>
            <Logo size={logoSize} color={"primary"} />
          </View>
          <Title style={styles.title}>{"ورود به تسکین"}</Title>
        </View>
        <View style={styles.authContainer}>
          <View style={styles.itemsContainer}>
            <View style={styles.itemsMargin}>
              <Input
                value={inputState.phoneNumber}
                onChangeText={onPhoneChange}
                title={phone.title}
                textAlign={"right"}
                placeholder={phone.placeholder}
                mode={"outlined"}
                errors={inputState.phoneValidation}
                keyboardType={"number-pad"}
                clearButton
              />
            </View>
            <View style={styles.termsContainer}>
              <SelectButton
                mode={"checkbox"}
                selected={agreed}
                size={24}
                onPress={toggleAgreement}
              >
                <Paragraph style={styles.terms}>
                  {
                    "حریم خصوصی و شرایط و قوانین استفاده از سرویس های تسکین موافقم."
                  }
                </Paragraph>
              </SelectButton>
            </View>
            <View style={styles.itemsMargin}>
              <Button
                onPress={start}
                mode={"contained"}
                rippleColor={"lightGrey"}
                size={"wide"}
                loading={loading}
                disabled={!agreed}
              >
                {phone.button}
              </Button>
            </View>
          </View>
        </View>
      </Scroller>
    </Container>
  );
}
export const Authentication = observer(AuthenticationScreen);
