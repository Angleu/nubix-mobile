import { Heading } from 'native-base';
import React, { FC } from 'react';

import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import { MainStackScreenProps } from '../../routes/types';

const DepositProviderCreditCard: FC<
  MainStackScreenProps<'DepositProviderCreditCard'>
> = () => {
  return (
    <Container>
      <Header heading="Depósito" />

      <Heading fontSize="3xl" mt="2">
        Cartão de Crédito
      </Heading>
    </Container>
  );
};

export default DepositProviderCreditCard;
