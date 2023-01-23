import { VStack } from 'native-base';
import React, { FC } from 'react';
import WebView from 'react-native-webview';

import { MainStackScreenProps } from '../../routes/types';

const DepositProviderCreditCard: FC<
  MainStackScreenProps<'DepositProviderCreditCard'>
> = () => {
  return (
    <VStack safeArea flex={1}>
      <WebView source={{ uri: 'https://reactnative.dev/' }} />
    </VStack>
  );
};

export default DepositProviderCreditCard;
