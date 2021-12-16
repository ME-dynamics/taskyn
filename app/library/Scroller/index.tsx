import React from "react";
import { ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { observer, Observer } from "mobx-react-lite";
import { RTLView } from "./RTLView";
import { styles } from "./styles";
import { IScroller } from "./types";

function ScrollerComponent(props: IScroller) {
  const { horizontal, rtl, keyboard, children, style } = props;
  const isRtlHorizontal = horizontal && rtl;
  function renderItems() {
    if (!children) {
      return null;
    }
    if (Array.isArray(children)) {
      const items = [];
      if (isRtlHorizontal) {
        for (let index = 0; index < children.length; index++) {
          const item = children[index];
          const key = item.key || `${index}`;
          items.push(<RTLView key={key}>{item}</RTLView>);
        }
      } else {
        for (let index = 0; index < children.length; index++) {
          const item = children[index];
          const key = item.key || `${index}`;
          items.push(<Observer key={key}>{() => item}</Observer>);
        }
      }
      return items;
    }
    return children;
  }
  if (keyboard) {
    return (
      <KeyboardAwareScrollView
        {...props}
        style={[
          styles.container,
          isRtlHorizontal ? styles.rtlScrollView : undefined,
          style,
        ]}
      >
        {renderItems()}
      </KeyboardAwareScrollView>
    );
  }
  return (
    <ScrollView
      {...props}
      style={[
        styles.container,
        isRtlHorizontal ? styles.rtlScrollView : undefined,
        style,
      ]}
    >
      {renderItems()}
    </ScrollView>
  );
}

export const Scroller = observer(ScrollerComponent);
