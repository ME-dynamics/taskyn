import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { Note, NoteList, CreateNote } from "../app/note";
import { headerOptions } from "./headerOptions";

const NoteStack = createNativeStackNavigator();

function NoteNavigation() {
  return (
    <NoteStack.Navigator
      initialRouteName={"noteList"}
      screenOptions={({ route }) => ({ ...headerOptions })}
    >
      <NoteStack.Screen
        name={"noteList"}
        component={NoteList}
        options={{ title: "یادداشت ها" }}
      />
      <NoteStack.Screen
        name={"createNote"}
        component={CreateNote}
        options={{ title: "ایجاد یادداشت" }}
      />
      <NoteStack.Screen
        name={"note"}
        component={Note}
        options={{ title: "یادداشت" }}
      />
    </NoteStack.Navigator>
  );
}

export const NoteNav = observer(NoteNavigation);
