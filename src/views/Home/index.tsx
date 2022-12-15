import {
  Avatar,
  Box,
  FlatList,
  Heading,
  HStack,
  Text,
  VStack,
} from 'native-base';
import {
  BellSimple,
  Coins,
  CreditCard,
  PaperPlaneTilt,
  ShareNetwork,
  Swap,
  Tray,
} from 'phosphor-react-native';
import React from 'react';

import Container from '../../components/layout/Container';

const activities = [
  {
    name: 'Keisha Levronka',
    date: '20 Sep 2021',
    ammount: '+13,9 USD',
    profilePic: 'https://randomuser.me/api/portraits/women/39.jpg',
  },
  {
    name: 'Ember Domanic',
    date: '20 Sep 2021',
    ammount: '+10,8 USD',
    profilePic: 'https://randomuser.me/api/portraits/women/40.jpg',
  },
  {
    name: 'Sent',
    date: '21 Sep 2021',
    ammount: '+253.9 USD',
    profilePic: undefined,
  },
  {
    name: 'Angleu Silva',
    date: '21 Sep 2021',
    ammount: '-100.9 USD',
    profilePic: 'https://randomuser.me/api/portraits/women/40.jpg',
  },
];

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

      <Box mt={10} bg="primary.lighter" px="8" py="4" rounded="3xl" shadow="9">
        <HStack justifyContent="space-between" mb={8}>
          <VStack>
            <Text color="white" fontSize="md">
              Total Balance
            </Text>
            <Text color="white" fontWeight="bold" fontSize="lg">
              $ 188,290.90
            </Text>
          </VStack>
          <CreditCard color="#fff" size={35} />
        </HStack>
        <HStack justifyContent="flex-end">
          <ShareNetwork size={26} color="white" />
        </HStack>
      </Box>

      <HStack mt="12" justifyContent="space-between">
        <VStack alignItems="center">
          <Swap size={28} color="#3F5857" />
          <Text>Transfer</Text>
        </VStack>
        <VStack alignItems="center">
          <Tray size={28} color="#c4c4c4" />
          <Text color="#c4c4c4">Deposit</Text>
        </VStack>
        <VStack alignItems="center">
          <CreditCard size={28} color="#c4c4c4" />
          <Text color="#c4c4c4">Pay</Text>
        </VStack>
        <VStack alignItems="center">
          <Coins size={28} color="#c4c4c4" />
          <Text color="#c4c4c4">Recieve</Text>
        </VStack>
      </HStack>

      <VStack mt={6}>
        <HStack justifyContent="space-between">
          <Text color="#373737" fontWeight="semibold">
            Recent Activity
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
                  <Text color="#373737">{item.date}</Text>
                </VStack>
              </HStack>
              <Text fontWeight="bold">{item.ammount}</Text>
            </HStack>
          )}
        />
      </VStack>
    </Container>
  );
}
