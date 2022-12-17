import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar, Heading, HStack, Icon, Text, VStack } from 'native-base';
import React from 'react';

const HomeHeader = () => {
  return (
    <HStack pt={5} justifyContent="space-between" alignItems="center">
      <VStack space={4}>
        <Heading
          fontFamily="heading"
          fontSize="xl"
          color="_neutral.300"
          fontWeight="bold"
        >
          Welcome back!
        </Heading>
        <Text fontFamily="body" fontSize="lg" color="_neutral.500">
          Hi, Zanuar Renaldie
        </Text>
      </VStack>
      <HStack alignItems="center" space={5}>
        <Avatar
          source={{
            uri: 'https://randomuser.me/api/portraits/women/45.jpg',
          }}
        />
        <Icon
          as={<MaterialCommunityIcons />}
          name="bell-outline"
          size="4xl"
          color="_neutral.200"
        />
      </HStack>
    </HStack>
  );
};

export default HomeHeader;
