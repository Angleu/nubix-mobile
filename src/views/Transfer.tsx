import {
  Avatar,
  Box,
  Center,
  FlatList,
  HStack,
  Input,
  Text,
  VStack,
} from 'native-base';
import { MagnifyingGlass } from 'phosphor-react-native';
import React from 'react';

import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import { contactsMock } from '../utils';
import { colorPallet } from '../utils/theme';

export default function Transfer() {
  return (
    <Container>
      <Header heading="Transfer" />

      <Center my={8}>
        <Text color="_primary.500" fontSize="2xl" mb={2}>
          Total Balance
        </Text>
        <Text
          color="_primary.500"
          fontWeight="bold"
          fontSize="lg"
          style={{
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowOffset: { width: 0, height: 4 },
            textShadowRadius: 10,
          }}
        >
          $ 188,290.90
        </Text>
      </Center>

      <Center>
        <Text mb={6} fontSize="lg" fontWeight="bold" color="_neutral.200">
          Contacts
        </Text>
        <Input
          py="3"
          borderRadius="xl"
          borderColor="_primary.500"
          placeholder="Search"
          InputLeftElement={
            <Box ml={3}>
              <MagnifyingGlass size={24} color={colorPallet._primary[500]} />
            </Box>
          }
        />
      </Center>

      <FlatList
        mt={6}
        data={contactsMock}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Box
            bg="_neutral.50"
            mb="6"
            px="8"
            py="4"
            rounded="3xl"
            style={{
              shadowColor: '#00000009',
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 10,
            }}
          >
            <HStack space={4} alignItems="center">
              <Avatar source={{ uri: item.profilePic }} bg="_secondary.50" />
              <VStack>
                <Text>{item.name}</Text>
                <Text>{item.phoneNumber}</Text>
              </VStack>
            </HStack>
          </Box>
        )}
      />
    </Container>
  );
}
