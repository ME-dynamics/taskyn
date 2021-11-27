import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Touchable } from "../Touchable";
import { Paragraph } from "../Typography";
import { Loading } from "./Loading";
// styles
import { styleGen } from "./styles";
// types
import { IButtonProps } from "./types";
function ButtonComponent(props: IButtonProps) {
  const {
    mode,
    bold,
    size,
    Icon,
    loading,
    dark,
    onPress,
    rippleColor,
    disabled,
    color,
    children,
    fullRadius,
  } = props;
  const { styles, iconStyle } = styleGen({
    dark,
    bold,
    disabled,
    mode,
    size,
    color,
    fullRadius,
  });

  return (
    <View style={[styles.container]}>
      {Icon && !loading && (
        <View style={styles.icon}>
          <Icon size={iconStyle.size} color={iconStyle.color} />
        </View>
      )}
      {loading ? (
        <Loading mode={mode} />
      ) : (
        <Paragraph numberOfLines={1} style={styles.text}>
          {children}
        </Paragraph>
      )}

      {disabled ? null : (
        <Touchable onPress={onPress} rippleColor={rippleColor} />
      )}
    </View>
  );
}

export const Button = observer(ButtonComponent);
