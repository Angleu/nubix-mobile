import {
  PressableAndroidRippleConfig,
  StyleProp,
  TextStyle,
} from 'react-native';

export const textShadowStyle: StyleProp<TextStyle> = {
  textShadowColor: 'rgba(0, 0, 0, 0.25)',
  textShadowOffset: { width: 0, height: 4 },
  textShadowRadius: 10,
};

export const androidRippleEffect: PressableAndroidRippleConfig = {
  color: '#c4c4c4c4',
};
