import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SearchBar, THEME } from "../../../library";
import { CardComponent } from "../../components/Card";
import { styles } from "./styles";

export function NoteList() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView
        style={styles.ScrollViewcontainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <CardComponent
          title={"موضوع"}
          createdAt={"1376/6/6"}
          body={
            "ویرایش و بازخوانی متون فارسی یا به زبان ساده‌تر ویرایش فنی متن‌های فارسی از نظر علائم نگارشی، نکات دستوری و جمله‌بندی، یکی از مهم‌ترین مسائلی است که بیشتر محققان، نویسنده‌ها و دانشجویان با آن درگیر هستند. شبکه مترجمین ایران با همکاری و همراهی موسسه (ویراستاران) راه‌حلی مناسب برای آن پیدا کرده است تا دیگر هیچ‌کس نگرانی در مورد ویراستاری متن‌های خود نداشته باشد."
          }
        />
        <CardComponent
          title={"موضوع"}
          createdAt={"1376/6/6"}
          body={
            "ویرایش و بازخوانی متون فارسی یا به زبان ساده‌تر ویرایش فنی متن‌های فارسی از نظر علائم نگارشی، نکات دستوری و جمله‌بندی، یکی از مهم‌ترین مسائلی است که بیشتر محققان، نویسنده‌ها و دانشجویان با آن درگیر هستند. شبکه مترجمین ایران با همکاری و همراهی موسسه (ویراستاران) راه‌حلی مناسب برای آن پیدا کرده است تا دیگر هیچ‌کس نگرانی در مورد ویراستاری متن‌های خود نداشته باشد."
          }
        />
      </ScrollView>
    </View>
  );
}
