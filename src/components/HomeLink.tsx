import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Icon, VStack } from 'native-base';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  MainStackNavigationProps,
  MainStackParamListType,
} from '../routes/types';

type Props = {
  iconName: string;
  text: string;
  to: keyof MainStackParamListType;
  routeParams?: unknown;
};

const HomeLink: FC<Props> = ({ iconName, text, to, routeParams }) => {
  const { push } = useNavigation<MainStackNavigationProps<'HomeTab'>>();

  return (
    <TouchableOpacity onPress={() => push(to, routeParams as never)}>
      <VStack alignItems="center">
        <Icon
          as={<MaterialCommunityIcons />}
          name={iconName}
          color="primary.100"
          size="3xl"
        />
        <Text>{text}</Text>
      </VStack>
    </TouchableOpacity>
  );
};

export default HomeLink;
