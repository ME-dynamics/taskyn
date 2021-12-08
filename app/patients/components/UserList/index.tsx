import React from "react";
import { View, Image } from "react-native";
import { IPatients } from "./types";
import { Touchable, Subheading, Button } from "../../../library";
import { styles } from "./styles";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const UserList = (props: IPatients) => {
  const { name, onPress, mode } = props;
  function renderButton() {
    if (mode === "reject") {
      return (
        <Button
          mode={"contained"}
          size={"extra-small"}
          rippleColor={"lightGrey"}
        >
          {"لغو اتصال"}
        </Button>
      );
    }
    if (mode === "accept") {
      return (
        <>
          <Button
            mode={"contained"}
            size={"extra-small"}
            rippleColor={"lightGrey"}
          >
            {"لغو اتصال"}
          </Button>
          <Button mode={"text"} size={"extra-small"} rippleColor={"lightGrey"}>
            {"لغو اتصال"}
          </Button>
        </>
      );
    }
    if (mode === "request") {
      return (
        <Button
          mode={"contained-grey"}
          size={"extra-small"}
          rippleColor={"lightGrey"}
        >
          {"درخواست"}
        </Button>
      );
    }
  }
  return (
    <View
      style={{
        flexDirection: "row-reverse",
        width: widthPercentageToDP(100),
        height: 80,
      }}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Image
              source={require("../../../../assets/image/unknown.png")}
              style={{ width: 40, height: 40 }}
            />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.persianNameContainer}>
            <Subheading>{name}</Subheading>
          </View>
        </View>
        <Touchable onPress={onPress} rippleColor={"grey"} />
      </View>
      <View
        style={[
          styles.buttonContainer,
          mode === "reject" || mode === "request" ? { bottom: 4 } : undefined,
        ]}
      >
        {renderButton()}
      </View>
    </View>
  );
};
