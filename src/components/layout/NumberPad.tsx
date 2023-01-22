import { MaterialIcons } from '@expo/vector-icons';
import { Icon, View } from 'native-base';
import { FC } from 'react';

import NumberButton from '../button/NumberButton';

type Props = {
  onPress: (value: string) => void;
  onLongPressDelete?: () => void;
};

const NumberPad: FC<Props> = ({ onPress, onLongPressDelete }) => {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <View
      flexDir="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="flex-end"
      mr={8}
    >
      {buttons.map((buttonContent, index) => (
        <NumberButton
          onPress={() => onPress(buttonContent)}
          key={index}
          text={buttonContent}
        />
      ))}
      <NumberButton
        isDelete
        onPress={() => onPress('del')}
        onLongPress={onLongPressDelete}
      >
        <Icon
          as={MaterialIcons}
          name="keyboard-backspace"
          size="3xl"
          color="danger.700"
        />
      </NumberButton>
    </View>
  );
};

export default NumberPad;
