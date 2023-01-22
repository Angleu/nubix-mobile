import { Avatar, Box, Center, Heading, Spinner, Text } from 'native-base';
import React, { useState } from 'react';
import { Alert } from 'react-native';

import { createTransaction } from '../api/transaction';
import SlideButton from '../components/button/SlideButton';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import { useUser } from '../hooks';
import { MainStackScreenProps } from '../routes/types';
import { formatMoney } from '../utils/formatter';

const TransferConfirmation = ({
  route,
}: MainStackScreenProps<'TransferConfirmation'>) => {
  const { destination, transferAmount, message } = route.params;

  const { user, updateUserData } = useUser();
  const { accounts } = user;
  const accountNumber = accounts[0].number_account;

  const [isSuccessful, setSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function sendTransactionRequest() {
    setIsLoading(true);
    try {
      await createTransaction(accountNumber, {
        amount: Number(transferAmount),
        coin: 'AOA',
        description: message,
        IBANF: destination.account[0].IBAN,
      });
      setSuccessful(true);
      updateUserData();
    } catch (error) {
      Alert.alert('Erro na Transferência');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header heading="" />

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
          <Heading fontFamily="heading" fontSize="xl" color="primary.100">
            Transferência Efetuada com Sucesso
          </Heading>
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
