import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';
import { format } from 'date-fns';
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
  VStack
} from 'native-base';
import React from 'react';
import { Platform } from 'react-native';

import Container from '../components/layout/Container';
import { useUser } from '../hooks';
import { MainStackScreenProps } from '../routes/types';
import { formatMoney } from '../utils/formatter';
import { androidRippleEffect } from '../utils/theme/style';

export default function Details({
  route,
  navigation: { goBack },
}: MainStackScreenProps<'Details'>): JSX.Element {
  const { transaction } = route.params;
  const transactionType = transaction.type;
  const { accounts } = useUser().user;

  return (
    <Container>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <VStack my={6} space={4} alignItems="center">
          <Heading>Detalhes</Heading>
          <VStack space={2} alignItems="center">
            {transactionType === 'receive' ? (
              <>
                <Avatar
                  source={{ uri: transaction.user_destine.avatar }}
                  bg="white"
                  p={2}
                  mx={1}
                  shadow={4}
                />
              </>
            ) : (
              <Icon
                as={Ionicons}
                name={'paper-plane'}
                color="primary.100"
                size="3xl"
                mx="2.5"
              />
            )}
            <Text fontSize="lg" fontWeight="bold" fontFamily="body">
              {transaction.user_destine.name}
            </Text>
            <Text fontFamily="body" fontSize="md">
              {transaction.user_destine.telephone}
            </Text>
          </VStack>
          <Heading fontFamily="body" color="primary.100">
            {formatMoney(
              transaction.amount,
              transaction.coin === 'AOA' ? 'Kzs' : '$'
            )}
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
                  {formatMoney(
                    transaction.amount,
                    transaction.coin === 'AOA' ? 'Kzs' : '$'
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
                  Custo
                </Text>
                <Text>
                  {formatMoney(0, transaction.coin === 'AOA' ? 'Kzs' : '$')}
                </Text>
              </HStack>
              <HStack justifyContent="space-between" alignItems="center">
                <Text
                  fontFamily="body"
                  color="primary.100"
                  fontSize="lg"
                  fontWeight="bold"
                >
                  Data e Hora da Transação
                </Text>
                <Text fontFamily="body">
                  {format(
                    new Date(transaction.data_transaction),
                    'dd/MM/yyyy hh:mm'
                  )}
                </Text>
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
              <HStack justifyContent="space-between" >
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
                    accounts[0].balance,
                    accounts[0].coin === 'AOA' ? 'Kzs' : '$'
                  )}
                </Text>
              </HStack>
              <HStack justifyContent="space-between">
                {transaction.reference && (
                  <>
                    <Text
                      fontFamily="body"
                      color="primary.100"
                      fontSize="lg"
                      fontWeight="bold"
                    >
                      Referencia
                    </Text>
                    <Text>{transaction.description}</Text>
                  </>
                )}
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
                <Text>
                  #
                  {transaction.id_transaction.substring(
                    transaction.id_transaction.length - 9
                  )}
                </Text>
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
