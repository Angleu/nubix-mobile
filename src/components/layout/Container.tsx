import { VStack } from 'native-base';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return (
    <VStack px={6} flex={1} safeArea bg="white">
      {children}
    </VStack>
  );
};

export default Container;
