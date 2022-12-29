import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';
import { Icon, VStack } from 'native-base';
import React, { FC } from 'react';
import { Text } from 'react-native';

import { MainStackParamListType } from '../routes/types';

type Props = {
  iconName: string;
  text: string;
  to: keyof MainStackParamListType;
};

const HomeLink: FC<Props> = ({ iconName, text, to }) => {
  return (
    <Link to={{ screen: to }}>
      <VStack alignItems="center">
        <Icon
          as={<MaterialCommunityIcons />}
          name={iconName}
          color="primary.100"
          size="3xl"
        />
        <Text>{text}</Text>
      </VStack>
    </Link>
  );
};

export default HomeLink;
