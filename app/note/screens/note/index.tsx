import React from "react";
import Gallery from "react-native-awesome-gallery";
const images = [
  "https://placekitten.com/300/300",
  "https://placekitten.com/300/300",
];
export function Note() {
  return (
    <Gallery
      data={images}
      keyExtractor={(item, index) => `${item}${index}`}
      onIndexChange={(newIndex) => {
        console.log(newIndex);
      }}
      loop
    />
  );
}
