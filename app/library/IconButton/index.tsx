import React, { Ref } from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { observer } from "mobx-react-lite";
import { iconStyleGen } from "./styles";

import { IIconButtonProps } from "./types";

function IconButtonComponent(
  props: IIconButtonProps,
  ref: Ref<BorderlessButton> | undefined
) {
  const { Icon, onPress, color, size } = props;
  const { iconColor, iconSize, rippleColor } = iconStyleGen({ color, size });
  return (
    <BorderlessButton ref={ref} onPress={onPress} rippleColor={rippleColor}>
      <Icon color={iconColor} size={iconSize} />
    </BorderlessButton>
  );
}

export const IconButton = observer(IconButtonComponent, {
  forwardRef: true,
});
