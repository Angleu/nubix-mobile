import { Heading } from 'native-base';
import React, { FC } from 'react';

import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import { MainStackScreenProps } from '../../routes/types';

const DepositProviderBank: FC<
  MainStackScreenProps<'DepositProviderBank'>
> = () => {
  return (
    <Container>
      <Header heading="Deposito" />

      <Heading fontSize="3xl" mt="2">
        Transferência Bancária
      </Heading>
    </Container>
  );
};

export default DepositProviderBank;
