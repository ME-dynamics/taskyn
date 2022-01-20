import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import {
  Button,
  Title,
  TaskynIcon,
  Container,
  Scroller,
} from "../../../library";

import { NoteCard } from "../../components/NoteCard";
import { retrieveNotes } from "../../usecases";

import { styles } from "./styles";
import { noteListState } from "../../entities";

function NoteListScreen() {
  const navigator = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute();
  const [loading, setLoading] = useState<boolean>(true);

  async function init() {
    // await retrieveNotes(route?.params?.id);
    await retrieveNotes("3c959478-8333-4d90-8ede-05d4c9226488");
    setLoading(false);
  }
  useEffect(() => {
    init();
  }, []);
  function renderNotes() {
    const length = noteListState.notes.length;
    if (length === 0) {
      return (
        <View style={styles.empty}>
          <Title>{"شما هنوز یادداشتی ایجاد نکردید."}</Title>
        </View>
      );
    }
    const components: JSX.Element[] = [];
    for (let index = 0; index < length; index++) {
      const { id, content, createdAt, title } = noteListState.notes[index];
      components.push(
        <NoteCard
          key={id}
          id={id}
          onPress={(id) => {
            console.log(id);
          }}
          title={title}
          date={createdAt}
          description={content}
        />
      );
    }
    return components;
  }
  return (
    <Container loading={loading}>
      <Scroller contentContainerStyle={styles.scrollerContainerView}>
        {renderNotes()}
      </Scroller>
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"FAB"}
          Icon={({ size, color }) => {
            return <TaskynIcon name={"camera"} size={size} color={color} />;
          }}
          fullRadius
          onPress={() => {
            navigator.push("createNote");
          }}
        >
          {"ایجاد یادداشت جدید"}
        </Button>
      </View>
    </Container>
  );
}

export const NoteList = observer(NoteListScreen);
