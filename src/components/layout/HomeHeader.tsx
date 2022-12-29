import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar, Heading, HStack, Icon, Text, VStack } from 'native-base';
import React from 'react';

import { userLoggedIn } from '../../utils/mocks/users';

const HomeHeader = () => {
  return (
    <HStack pt={5} justifyContent="space-between" alignItems="center">
      <VStack space={4}>
        <Heading
          fontFamily="heading"
          fontSize="xl"
          color="coolGray.700"
          fontWeight="bold"
        >
          Bem Vindo de Volta!
        </Heading>
        <Text fontFamily="body" fontSize="lg" color="dark.50">
          Olá, {userLoggedIn.name}
        </Text>
      </VStack>
      <HStack alignItems="center" space={5}>
        <Avatar
          source={{
            uri: userLoggedIn.profilePictureURL,
          }}
        />
        <Icon
          as={<MaterialCommunityIcons />}
          name="bell-outline"
          size="4xl"
          color="gray.700"
        />
      </HStack>
    </HStack>
  );
};

export default HomeHeader;
