import { Center, Heading, Spinner, VStack } from 'native-base';
import React, { FC, useState } from 'react';
import { Alert } from 'react-native';
import WebView, { WebViewNavigation } from 'react-native-webview';
import { useQuery } from 'react-query';

import { depositCard } from '../../api/account';
import { MainStackScreenProps } from '../../routes/types';

const DepositProviderCreditCard: FC<
  MainStackScreenProps<'DepositProviderCreditCard'>
> = ({ route, navigation }) => {
  const { amount, currency } = route.params;

  const { isLoading, error, data } = useQuery('deposit-card', () =>
    depositCard({ amount: Number(amount), currency })
  );

  const [status, setStatus] = useState<'loading' | 'cancel' | 'success'>(
    'loading'
  );

  if (error) {
    Alert.alert('Erro ao efetuar o depósito');
    navigation.goBack();
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
  }

  if (status === 'success') {
    Alert.alert('Depósito Efetuado', 'O depósito foi efetuado com sucesso');
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'HomeTab',
        },
      ],
    });
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
