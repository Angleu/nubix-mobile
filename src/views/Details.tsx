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
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import { Platform } from 'react-native';

import Container from '../components/layout/Container';
import { MainStackScreenProps } from '../routes/types';
import { formatMoney } from '../utils/formatter';
import { userLoggedIn } from '../utils/mocks/users';
import { androidRippleEffect } from '../utils/theme/style';

export default function Details({
  route,
  navigation: { goBack },
}: MainStackScreenProps<'Details'>): JSX.Element {
  const { transaction } = route.params;
  const transactionType = transaction.type;

  return (
    <Container>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <VStack my={6} space={4} alignItems="center">
          <Heading>Detalhes</Heading>
          <VStack space={2} alignItems="center">
            {transactionType === 'receive' ? (
              <>
                <Avatar
                  source={{ uri: transaction.origin.profilePictureURL }}
                  bg="white"
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
                name={
                  transaction.type === 'payment' ? 'payments' : 'paper-plane'
                }
                color="primary.100"
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
          <Heading fontFamily="body" color="primary.100">
            {formatMoney(transaction.amount, transaction.currency)}
          </Heading>
          <HStack space={4}>
            <IconButton
              borderRadius="full"
              _pressed={{
                bg: 'light.50',
              }}
              icon={<Icon as={MaterialIcons} name="share" size={38} />}
              _icon={{ color: 'primary.100' }}
              // onPress={onShare}
            />
            <IconButton
              borderRadius="full"
              _pressed={{
                bg: 'light.50',
              }}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="cloud-download-outline"
                  size={38}
                />
              }
              _icon={{ color: 'primary.100' }}
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
              borderBottomColor="primary.50"
              borderBottomWidth={3}
              borderStyle={Platform.OS === 'ios' ? 'solid' : 'dashed'}
              py={4}
            >
              <HStack justifyContent="space-between">
                <Text
                  fontFamily="body"
                  color="primary.100"
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
                  color="primary.100"
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
                  color="primary.100"
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
              borderBottomColor="primary.50"
              borderBottomWidth={3}
              borderStyle={Platform.OS === 'ios' ? 'solid' : 'dashed'}
              py={4}
            >
              <HStack justifyContent="space-between">
                <Text
                  fontFamily="body"
                  color="primary.100"
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
                  color="primary.100"
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
                  color="primary.100"
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
          android_ripple={androidRippleEffect}
          _pressed={{ bg: 'primary.100' }}
          py={4}
          mb={3}
          background="primary.100"
          fontSize="lg"
          fontWeight="bold"
          borderRadius={10}
          shadow="6"
          onPress={() => goBack()}
        >
          Fechar
        </Button>
      </ScrollView>
    </Container>
  );
}
