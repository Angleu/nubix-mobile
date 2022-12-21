import { HStack } from 'native-base';
import React from 'react';

import Card from '../components/Card';
import HomeLink from '../components/HomeLink';
import Container from '../components/layout/Container';
import HomeHeader from '../components/layout/HomeHeader';
import RecentActivities from '../components/RecentActivities';

export default function Home() {
  return (
    <Container>
      <HomeHeader />
      <Card />
      <HStack mt="5" justifyContent="center" space="12">
        <HomeLink
          iconName="bank-transfer-out"
          text="Transferir"
          to="transfer"
        />
        <HomeLink iconName="inbox" text="Depositar" to="deposit" />
        <HomeLink iconName="credit-card-outline" text="Pagar" to="payment" />
        <HomeLink
          iconName="bank-transfer-in"
          text="Receber"
          to="receiveMoney"
        />
      </HStack>
      <RecentActivities />
    </Container>
  );
}
