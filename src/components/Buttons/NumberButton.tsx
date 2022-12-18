import { Button } from 'native-base';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isDelete?: boolean;
};

const NumberButton: FC<Props> = ({ children, isDelete = false }) => {
  return (
    <Button
      flex={1}
      variant="outline"
      px={6}
      py={2}
      borderColor={isDelete ? 'danger.700' : '_primary.500'}
      borderWidth="2"
      borderRadius="3xl"
      _text={{
        color: '_neutral.600',
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
