import {
  Avatar,
  Box,
  FlatList,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from 'native-base';
import {
  ArrowCircleLeft,
  MagnifyingGlass,
  PaperPlaneTilt,
  QrCode,
} from 'phosphor-react-native';
import React from 'react';

import Container from '../../../components/layout/Container';
import { colorPallet } from '../../../utils/theme';

const activities = [
  {
    name: 'Keisha Levronka',
    number: '923688612',
    profilePic: 'https://randomuser.me/api/portraits/women/39.jpg',
  },
  {
    name: 'Ember Domanic',
    number: '923688612',
    profilePic: 'https://randomuser.me/api/portraits/women/40.jpg',
  },
  {
    name: 'Angleu Silva',
    number: '923688612',
    profilePic: 'https://randomuser.me/api/portraits/women/40.jpg',
  },
];

export default function Transfer() {
  return (
    <Container>
      <HStack pt={5} justifyContent="space-between" alignItems="center">
        <ArrowCircleLeft size={32} />
        <Heading fontSize="xl" color="neutral.normal" fontWeight="bold">
          Transfer
        </Heading>
        <QrCode color={colorPallet.primary.dark} size={42} />
      </HStack>
      <VStack my={4} space={4}>
        <VStack space={3} alignItems="center">
          <Text color="primary.normal" fontSize="2xl" fontWeight="light">
            Total Balance
          </Text>
          <Text color="primary.normal" fontWeight="bold" fontSize="lg">
            $ 188,290.90
          </Text>
        </VStack>
        <Input
          py="3"
          placeholder="Search"
          w="100%"
          InputLeftElement={
            <MagnifyingGlass size={24} color={colorPallet.secondary.light} />
          }
        />
        <VStack mt={6}>
          <HStack justifyContent="space-between">
            <Text color="#373737" fontWeight="semibold">
              Contacts
            </Text>
            <Text color="#3F5857" fontWeight="bold">
              See All
            </Text>
          </HStack>
          <FlatList
            data={activities}
            mt={3}
            renderItem={({ item }) => (
              <HStack justifyContent="space-between" mb={4} alignItems="center">
                <HStack space={3} alignItems="center">
                  {item.profilePic ? (
                    <Avatar
                      source={{ uri: item.profilePic }}
                      bg="white"
                      p={1}
                      mx={1}
                      shadow={4}
                    />
                  ) : (
                    <Box p={1} shadow={4} mx={2}>
                      <PaperPlaneTilt color="#3F5857" size={32} />
                    </Box>
                  )}
                  <VStack>
                    <Text fontWeight="bold" color="#373737">
                      {item.name}
                    </Text>
                    <Text color="#373737">{item.number}</Text>
                  </VStack>
                </HStack>
              </HStack>
            )}
          />
        </VStack>
      </VStack>
    </Container>
  );
}
