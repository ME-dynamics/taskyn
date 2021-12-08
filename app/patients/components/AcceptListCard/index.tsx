import React from "react";
import { View, Image, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import { Button, Caption, Title, Touchable } from "../../../library";
import { styles } from "./style";
import { IPatientCardProps } from "./type";
import { UserList } from "../UserList";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export const AcceptListCard = observer((props: IPatientCardProps) => {
  const { image, name, description, onPress } = props;

  return (
    <View style={styles.container}>
      <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContaienr}
      >
        <UserList name={"سجاد"} mode={"accept"} />
      </ScrollView>
     </View>
  );
});
