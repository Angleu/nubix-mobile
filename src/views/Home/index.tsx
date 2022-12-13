import { Avatar, HStack, VStack } from 'native-base';
import React from 'react';
import { Text } from 'react-native';

import Container from '../../components/layout/Container';

export default function Home() {
  return (
    <Container>
      <HStack py={12} justifyContent="space-between" alignItems="center">
        <VStack>
          <Text>Welcome back!</Text>
          <Text>Hi, Zanuar Renaldie</Text>
        </VStack>
        <HStack>
          <Avatar />
        </HStack>
      </HStack>
    </Container>
  );
}
