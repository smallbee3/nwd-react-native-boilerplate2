import type { FC } from 'react';
import React from 'react';
import type {
  ActivityIndicatorProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { ActivityIndicator } from 'react-native';

import { StyledButton } from '../Styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  indicatorColor?: ActivityIndicatorProps['color'];
  indicatorSize?: ActivityIndicatorProps['size'];
}

const ButtonLoading: FC<Props> = ({
  style,
  indicatorColor,
  indicatorSize = 'small',
}) => {
  return (
    <StyledButton style={style}>
      <ActivityIndicator size={indicatorSize} color={indicatorColor} />
    </StyledButton>
  );
};

export default ButtonLoading;
