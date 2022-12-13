import { VStack } from 'native-base';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return <VStack px={10}>{children}</VStack>;
};

export default Container;
