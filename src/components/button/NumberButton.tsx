import { Text, theme } from 'native-base';
import { FC, ReactNode } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { colorPallet } from '../../utils/theme';

type Props = {
  children?: ReactNode;
  isDelete?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  text?: string;
};

const NumberButton: FC<Props> = ({
  children,
  isDelete = false,
  onPress,
  onLongPress,
  text,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      delayPressIn={0}
      style={isDelete ? [style.button, style.deleteButton] : style.button}
    >
      {text ? (
        <Text
          color="black"
          fontFamily="body"
          fontSize="4xl"
          fontWeight="medium"
        >
          {text}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    margin: 8,
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: colorPallet.primary[100],
    borderRadius: 30,
    fontSize: 36,
    fontFamily: 'Poppins_500Medium',
    fontWeight: 'medium',
    color: theme.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    borderColor: theme.colors.danger[700],
  },
});

export default NumberButton;
