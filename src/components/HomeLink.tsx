import { VStack } from 'native-base';
import React, { FC } from 'react';
import { Text } from 'react-native';

type Props = {
  icon: JSX.Element;
  text: string;
};

const HomeLink: FC<Props> = ({ icon, text }) => {
  return (
    <VStack alignItems="center">
      {icon}
      <Text>{text}</Text>
    </VStack>
  );
};

export default HomeLink;
