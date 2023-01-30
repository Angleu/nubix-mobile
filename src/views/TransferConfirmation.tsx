import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Spinner,
  Text,
  VStack,
} from 'native-base';
import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';

import { createTransaction } from '../api/transaction';
import SlideButton from '../components/button/SlideButton';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import { useUser } from '../hooks';
import { TransactionType } from '../models/Transaction';
import { MainStackScreenProps } from '../routes/types';
import { formatMoney } from '../utils/formatter';
import { androidRippleEffect } from '../utils/theme/style';

const TransferConfirmation = ({
  route,
  navigation,
}: MainStackScreenProps<'TransferConfirmation'>) => {
  const { destination, transferAmount, message } = route.params;

  const { user } = useUser();
  const { accounts } = user;
  const accountNumber = accounts[0].number_account;

  const [isSuccessful, setSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const transactionRef = useRef<TransactionType>(null);

  async function sendTransactionRequest() {
    setIsLoading(true);
    try {
      const response = await createTransaction(accountNumber, {
        amount: Number(transferAmount),
        coin: 'AOA',
        description: message,
        IBANF: destination.account[0].IBAN,
      });
      transactionRef.current = response;
      setSuccessful(true);
    } catch (error) {
      Alert.alert('Erro na Transferência');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header heading="" canGoBack={!isSuccessful} />

      <Center mt="12">
        <Heading fontFamily="heading" fontSize="xl" color="primary.100">
          Irá Transferir
        </Heading>
        <Avatar
          mt="5"
          size="lg"
          source={{ uri: destination.avatar }}
          shadow={4}
        />
        <Text
          my="2"
          fontFamily="body"
          fontSize="lg"
          fontWeight="bold"
          color="coolGray.700"
        >
          {destination.name}
        </Text>
        <Text
          fontFamily="body"
          fontSize="lg"
          fontWeight="light"
          color="coolGray.700"
        >
          {destination.telephone}
        </Text>
        <Text
          my="12"
          fontFamily="body"
          fontWeight="bold"
          fontSize="4xl"
          color="primary.100"
          style={{
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowOffset: { width: 0, height: 4 },
            textShadowRadius: 10,
          }}
        >
          {formatMoney(transferAmount, 'Kzs')}
        </Text>
        {message && (
          <>
            <Text fontFamily="body" fontSize="xl" color="primary.100">
              Com a mensagem
            </Text>
            <Box
              mt="7"
              mb="12"
              bg="primary.50"
              w="full"
              rounded="2xl"
              p="4"
              minH="32"
              shadow={2}
            >
              <Text color="white" fontFamily="body" fontSize="md">
                {message}
              </Text>
            </Box>
          </>
        )}
        {isSuccessful && !isLoading ? (
          <>
            <Heading fontFamily="heading" fontSize="xl" color="primary.100">
              Transferência Efetuada com Sucesso
            </Heading>
            <VStack w="full" space="4" mt="4">
              <Button
                onPress={() =>
                  navigation.navigate('Details', {
                    transaction: transactionRef.current,
                  })
                }
                w="full"
                android_ripple={androidRippleEffect}
                _pressed={{ bg: 'white' }}
                bgColor="primary.100"
                rounded="xl"
                shadow={3}
                _text={{
                  fontFamily: 'body',
                  fontWeight: 'bold',
                  fontSize: 'md',
                  color: 'white',
                }}
              >
                Detalhes da Transferência
              </Button>
              <Button
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'HomeTab',
                      },
                    ],
                  })
                }
                android_ripple={androidRippleEffect}
                _pressed={{ bg: 'white' }}
                bgColor="white"
                variant="outline"
                rounded="xl"
                shadow={3}
                _text={{
                  fontFamily: 'body',
                  fontWeight: 'bold',
                  fontSize: 'md',
                  color: 'primary.100',
                }}
              >
                Ir para Home
              </Button>
            </VStack>
          </>
        ) : isLoading ? (
          <Spinner color="primary.100" size="lg" />
        ) : (
          <SlideButton
            buttonMessage="Arraste para enviar"
            onSwipeComplete={sendTransactionRequest}
          />
        )}
      </Center>
    </Container>
  );
};

export default TransferConfirmation;
