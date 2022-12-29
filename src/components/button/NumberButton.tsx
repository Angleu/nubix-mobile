import { Button } from 'native-base';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isDelete?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
};

const NumberButton: FC<Props> = ({
  children,
  isDelete = false,
  onPress,
  onLongPress,
}) => {
  return (
    <Button
      onPress={() => onPress()}
      onLongPress={onLongPress}
      flex={1}
      variant="outline"
      py={2}
      borderColor={isDelete ? 'danger.700' : 'primary.100'}
      borderWidth="2"
      borderRadius="3xl"
      _text={{
        color: 'black',
        fontFamily: 'body',
        fontSize: '4xl',
        fontWeight: 'medium',
      }}
    >
      {children}
    </Button>
  );
};

export default NumberButton;
