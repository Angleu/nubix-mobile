import { Center, Heading, Spinner, VStack } from 'native-base';
import React, { FC, useState } from 'react';
import { Alert } from 'react-native';
import WebView, { WebViewNavigation } from 'react-native-webview';
import { useMutation, useQuery } from 'react-query';

import { deposit, depositCard } from '../../api/account';
import { MainStackScreenProps } from '../../routes/types';

const DepositProviderCreditCard: FC<
  MainStackScreenProps<'DepositProviderCreditCard'>
> = ({ route, navigation }) => {
  const {
    amount,
    currency,
    accountToReceive: { number_account },
  } = route.params;

  const [status, setStatus] = useState<'loading' | 'cancel' | 'success'>(
    'loading'
  );

  const { isLoading, error, data } = useQuery('deposit-card', () =>
    depositCard({ amount: Number(amount) * 100, currency })
  );
  const mutation = useMutation(() =>
    deposit(number_account, { amount: Number(amount), currency })
  );

  if (mutation.isLoading) {
    return (
      <Center flex={1}>
        <Heading>Efetuando o depósito</Heading>
        <Spinner color="primary.100" size="lg" />
      </Center>
    );
  }

  if (error) {
    Alert.alert('Erro ao efetuar o depósito');
    navigation.goBack();
    return null;
  }

  if (status === 'cancel') {
    Alert.alert('Depósito Cancelado', 'O depósito foi cancelado por sua ordem');
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'HomeTab',
        },
      ],
    });
    return null;
  }

  if (status === 'success') {
    mutation
      .mutateAsync()
      .then(() => {
        Alert.alert('Depósito Efetuado', 'O depósito foi efetuado com sucesso');
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'HomeTab',
            },
          ],
        });
      })
      .catch(() => {
        Alert.alert('Erro ao efetuar o depósito');
        navigation.goBack();
      });
    return null;
  }

  function handleNavigationStateChange(event: WebViewNavigation) {
    const { url } = event;
    if (url.endsWith('/success')) {
      setStatus('success');
    } else if (url.endsWith('/cancel')) {
      setStatus('cancel');
    }
  }

  return (
    <VStack safeArea flex={1}>
      {isLoading ? (
        <Center flex={1}>
          <Heading>Carregando o Formulário</Heading>
          <Spinner color="primary.100" size="lg" />
        </Center>
      ) : (
        <WebView
          source={{ uri: data.url }}
          onNavigationStateChange={handleNavigationStateChange}
        />
      )}
    </VStack>
  );
};

export default DepositProviderCreditCard;
