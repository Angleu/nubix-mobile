import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
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
import { DetailsScreenProp } from '../constants/routes';
import { formatMoney } from '../utils/formatter';
import { userLoggedIn } from '../utils/mocks/users';

export default function Details({
  route,
  navigation: { goBack },
}: DetailsScreenProp): JSX.Element {
  const { transaction } = route.params;
  const transactionType = transaction.type;

  return (
    <Container>
      <VStack my={6} space={4} alignItems="center">
        <Heading>Detalhes</Heading>
        <VStack space={2} alignItems="center">
          {transactionType === 'receive' ? (
            <>
              <Avatar
                source={{ uri: transaction.origin.profilePictureURL }}
                bg="_neutral.50"
                p={2}
                mx={1}
                shadow={4}
              />
            </>
          ) : (
            <Icon
              as={
                transaction.type === 'payment' ? (
                  <MaterialIcons />
                ) : (
                  <Ionicons />
                )
              }
              name={transaction.type === 'payment' ? 'payments' : 'paper-plane'}
              color="_primary.500"
              size="3xl"
              mx="2.5"
            />
          )}
          <Text fontSize="lg" fontWeight="bold" fontFamily="body">
            {transactionType === 'payment'
              ? transaction.entityName
              : transactionType === 'receive'
              ? transaction.origin.name
              : transaction.destination.name}
          </Text>
          {transactionType !== 'payment' && (
            <Text fontFamily="body" fontSize="md">
              {transactionType === 'receive'
                ? transaction.origin.phoneNumber
                : transaction.destination.phoneNumber}
            </Text>
          )}
        </VStack>
        <Heading fontFamily="body" color="_primary.400">
          {formatMoney(transaction.amount, transaction.currency)}
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
                Valor da Transferência
              </Text>
              <Text fontFamily="body" fontSize="lg">
                {formatMoney(transaction.amount, transaction.currency)}
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text
                fontFamily="body"
                color="_primary.400"
                fontSize="lg"
                fontWeight="bold"
              >
                Custo
              </Text>
              <Text>{formatMoney(0, transaction.currency)}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text
                fontFamily="body"
                color="_primary.400"
                fontSize="lg"
                fontWeight="bold"
              >
                Data da Transação
              </Text>
              <Text fontFamily="body">29/02/2022</Text>
            </HStack>
          </Stack>
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
                Balanço Atual
              </Text>
              <Text fontFamily="body" fontSize="lg">
                {formatMoney(
                  userLoggedIn.accounts[0].balance,
                  userLoggedIn.accounts[0].currency
                )}
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text
                fontFamily="body"
                color="_primary.400"
                fontSize="lg"
                fontWeight="bold"
              >
                Referencia
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
                Número da Transação
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
        Fechar
      </Button>
    </Container>
  );
}
