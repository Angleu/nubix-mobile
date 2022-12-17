import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';
import { Icon, VStack } from 'native-base';
import React, { FC } from 'react';
import { Text } from 'react-native';

import { RootStackParamListType } from '../constants/routes';

type Props = {
  iconName: string;
  text: string;
  to: keyof RootStackParamListType;
};

const HomeLink: FC<Props> = ({ iconName, text, to }) => {
  return (
    <Link to={{ screen: to }}>
      <VStack alignItems="center">
        <Icon
          as={<MaterialCommunityIcons />}
          name={iconName}
          color="_primary.500"
          size="3xl"
        />
        <Text>{text}</Text>
      </VStack>
    </Link>
  );
};

export default HomeLink;
