import { Heading } from 'native-base';
import React, { FC } from 'react';

import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import { MainStackScreenProps } from '../../routes/types';

const DepositProvider: FC<MainStackScreenProps<'DepositProvider'>> = () => {
  return (
    <Container>
      <Header heading="Deposito" />

      <Heading fontSize="3xl" mt="2">
        Selecionar Origem
      </Heading>
    </Container>
  );
};

export default DepositProvider;
