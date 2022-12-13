import { Avatar, Heading, HStack, Text, VStack } from 'native-base';
import { BellSimple } from 'phosphor-react-native';
import React from 'react';

import Container from '../../components/layout/Container';

export default function Home() {
  return (
    <Container>
      <HStack pt={5} justifyContent="space-between" alignItems="center">
        <VStack space={2}>
          <Heading fontSize="xl" color="neutral.normal" fontWeight="bold">
            Welcome back!
          </Heading>
          <Text color="black">Hi, Zanuar Renaldie</Text>
        </VStack>
        <HStack alignItems="center" space={5}>
          <Avatar
            source={{ uri: 'https://randomuser.me/api/portraits/women/45.jpg' }}
          />
          <BellSimple size={38} color="#3A3A3A" />
        </HStack>
      </HStack>
    </Container>
  );
}
