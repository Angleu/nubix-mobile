import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, Pressable } from 'native-base';
import { ArrowCircleLeft, QrCode } from 'phosphor-react-native';
import React, { FC } from 'react';

import { colorPallet } from '../../utils/theme';

type Props = {
  heading: string;
};

const Header: FC<Props> = ({ heading }) => {
  const { goBack } = useNavigation();
  return (
    <HStack pt={5} justifyContent="space-between" alignItems="center">
      <Pressable onPress={goBack}>
        <ArrowCircleLeft size={32} weight="light" />
      </Pressable>
      <Heading fontSize="xl" color="_neutral.500" fontWeight="bold">
        {heading}
      </Heading>
      <QrCode color={colorPallet._primary[400]} size={42} />
    </HStack>
  );
};

export default Header;
