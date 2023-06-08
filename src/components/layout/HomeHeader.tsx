import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {
  Avatar,
  Heading,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

import { useUser } from '../../hooks';
import { MainStackScreenProps } from '../../routes/types';

const HomeHeader = ({ navigation }: MainStackScreenProps<'Profile'>) => {
  const {
    user: { firstName, lastName, avatarImageURL },
  } = useUser();
  const fullName = `${firstName} ${lastName}`;

  function handlePres() {
    navigation.push('Profile');
    // logout()
  }
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
          Olá, {fullName}
        </Text>
      </VStack>
      <HStack alignItems="center" space={5}>
        <Pressable onPress={handlePres}>
          {avatarImageURL ? (
            <Avatar
              source={{
                uri: avatarImageURL,
              }}
            />
          ) : (
            <Icon size="4xl" as={MaterialIcons} name="person" />
          )}
        </Pressable>
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
