import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
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
import { RootStackParamListType } from '../constants/routes';

type Props = NativeStackScreenProps<RootStackParamListType, 'details'>;

export default function Details({
  route,
  navigation: { goBack },
}: Props): JSX.Element {
  return (
    <Container>
      <VStack my={6} space={4} alignItems="center">
        <Heading>Detalhes</Heading>
        <VStack space={2} alignItems="center">
          <Avatar
            shadow={6}
            source={{ uri: route.params.profilePic }}
            size="lg"
          />
          <Text fontSize="lg" fontWeight="bold" fontFamily="body">
            {route.params.name}
          </Text>
          <Text fontFamily="body" fontSize="md">
            {route.params.number}
          </Text>
        </VStack>
        <Heading fontFamily="body" color="_primary.400">
          {route.params.amount}
        </Heading>
        <HStack space={4}>
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
        <VStack space={4} alignItems="center" width="full">
          <Text fontFamily="body" fontSize="xl" fontWeight="bold">
            Detalhes da transação
          </Text>
          <Stack
            space={2}
            width="full"
            borderBottomColor="_primary.50"
            borderBottomWidth={3}
            borderStyle="dashed"
            py={4}
          >
            <HStack justifyContent="space-between">
              <Text
                fontFamily="body"
                color="_primary.400"
                fontSize="lg"
                fontWeight="bold"
              >
                Transfer
              </Text>
              <Text fontFamily="body" fontSize="lg">
                {route.params.amount}
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text
                fontFamily="body"
                color="_primary.400"
                fontSize="lg"
                fontWeight="bold"
              >
                Cost
              </Text>
              <Text>{0}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text
                fontFamily="body"
                color="_primary.400"
                fontSize="lg"
                fontWeight="bold"
              >
                Date Transation
              </Text>
              <Text fontFamily="body">29/02/2022</Text>
            </HStack>
          </Stack>
          {/* {Aqui é outra parte} */}
          <Stack
            space={2}
            width="full"
            borderBottomColor="_primary.50"
            borderBottomWidth={3}
            borderStyle="dashed"
            py={4}
          >
            <HStack justifyContent="space-between">
              <Text
                fontFamily="body"
                color="_primary.400"
                fontSize="lg"
                fontWeight="bold"
              >
                Balance Actual
              </Text>
              <Text fontFamily="body" fontSize="lg">
                {route.params.amount}
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text
                fontFamily="body"
                color="_primary.400"
                fontSize="lg"
                fontWeight="bold"
              >
                Reference
              </Text>
              <Text>Some thing here</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text
                fontFamily="body"
                color="_primary.400"
                fontSize="lg"
                fontWeight="bold"
              >
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
        onPress={() => goBack()}
      >
        Done
      </Button>
    </Container>
  );
}
