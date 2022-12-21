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
        <HomeLink iconName="bank-transfer-out" text="Transfer" to="transfer" />
        <HomeLink iconName="inbox" text="Deposit" to="deposit" />
        <HomeLink iconName="credit-card-outline" text="Pay" to="payment" />
        <HomeLink iconName="bank-transfer-in" text="Receive" to="receive" />
      </HStack>
      <RecentActivities />
    </Container>
  );
}
