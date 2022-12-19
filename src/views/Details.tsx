import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Avatar,
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

import Container from '../components/layout/Container';
import { PropsRoutes } from '../constants/routes.type';

export default function Details({ route }: PropsRoutes): JSX.Element {
  //   console.log(route.params.profilePic);
  return (
    <Container>
      <VStack alignItems="center">
        <Heading>Transfer</Heading>
        <VStack alignItems="center">
          <Avatar source={{ uri: route.params.profilePic }} size={67} />
          <Text>{route.params.name}</Text>
          <Text>{route.params.number}</Text>
        </VStack>
        <Heading color="_primary.400">{route.params.amount}</Heading>
        <HStack>
          <IconButton
            icon={<Icon as={MaterialIcons} name="share" size={38} />}
            _icon={{ color: '_primary.400' }}
            // onPress={onShare}
          />
          <IconButton
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="cloud-download-outline"
                size={38}
              />
            }
            _icon={{ color: '_primary.400' }}
            // onPress={onShare}
          />
        </HStack>
        <VStack alignItems="center" width="full">
          <Text>Detalhes da transação</Text>
          <Stack
            space={2}
            width="full"
            borderBottomColor="_primary.50"
            borderBottomWidth={3}
            borderStyle="dashed"
          >
            <HStack justifyContent="space-between">
              <Text color="_primary.400" fontSize="lg" fontWeight="bold">
                Transfer
              </Text>
              <Text fontSize="lg">{route.params.number}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text color="_primary.400" fontSize="lg" fontWeight="bold">
                Tax
              </Text>
              <Text>{0}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text color="_primary.400" fontSize="lg" fontWeight="bold">
                Date Transation
              </Text>
              <Text>29/02/2022</Text>
            </HStack>
          </Stack>
          {/* {Aqui é outra parte} */}
          <Stack
            space={2}
            width="full"
            borderBottomColor="_primary.50"
            borderBottomWidth={3}
            borderStyle="dashed"
          >
            <HStack justifyContent="space-between">
              <Text color="_primary.400" fontSize="lg" fontWeight="bold">
                Balance Actual
              </Text>
              <Text fontSize="lg">{route.params.amount}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text color="_primary.400" fontSize="lg" fontWeight="bold">
                Reference
              </Text>
              <Text>Some thing here</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text color="_primary.400" fontSize="lg" fontWeight="bold">
                Number of transation
              </Text>
              <Text>#2987667</Text>
            </HStack>
          </Stack>
        </VStack>
      </VStack>
      <Button
        py={4}
        mb={3}
        background="_primary.400"
        fontSize="lg"
        fontWeight="bold"
        borderRadius={10}
        shadow="6"
        //   onPress={}
      >
        Done
      </Button>
    </Container>
  );
}
