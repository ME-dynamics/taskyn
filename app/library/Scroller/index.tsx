import React from "react";
import { ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { observer, Observer } from "mobx-react-lite";
import { RTLView } from "./RTLView";
import { styles } from "./styles";
import { IScroller } from "./types";

function ScrollerComponent(props: IScroller) {
  const { horizontal, rtl, keyboard, children } = props;
  const isRtlHorizontal = horizontal && rtl;
  function renderItems() {
    if (isRtlHorizontal && children) {
      if (Array.isArray(children)) {
        const items = [];
        for (let index = 0; index < children.length; index++) {
          const item = children[index];
          items.push(
            <Observer key={item.key}>
              {() => <RTLView key={item.key}>{item}</RTLView>}
            </Observer>
          );
        }

        return items;
      }
      return (
        <Observer>
          {() => <RTLView key={children.toString()}>{children}</RTLView>}
        </Observer>
      );
    }
    return children;
  }
  if (keyboard) {
    return (
      <KeyboardAwareScrollView
        style={[
          styles.container,
          isRtlHorizontal ? styles.rtlScrollView : undefined,
        ]}
        {...props}
      >
        {renderItems()}
      </KeyboardAwareScrollView>
    );
  }
  return (
    <ScrollView
      style={[
        styles.container,
        isRtlHorizontal ? styles.rtlScrollView : undefined,
      ]}
      {...props}
    >
      {renderItems()}
    </ScrollView>
  );
}

export const Scroller = observer(ScrollerComponent);
