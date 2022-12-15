import { Link } from '@react-navigation/native';
import { VStack } from 'native-base';
import React, { FC } from 'react';
import { Text } from 'react-native';

import { RootStackParamListType } from '../constants/routes';

type Props = {
  icon: JSX.Element;
  text: string;
  to: keyof RootStackParamListType;
};

const HomeLink: FC<Props> = ({ icon, text, to }) => {
  return (
    <Link to={{ screen: to }}>
      <VStack alignItems="center">
        {icon}
        <Text>{text}</Text>
      </VStack>
    </Link>
  );
};

export default HomeLink;
