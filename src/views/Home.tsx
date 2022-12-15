import { HStack } from 'native-base';
import { CreditCard, Swap, Tray } from 'phosphor-react-native';
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
      <HStack mt="12" justifyContent="space-between">
        <HomeLink
          icon={<Swap size={28} color="#3F5857" />}
          text="Transfer"
          to="transfer"
        />
        <HomeLink
          icon={<Tray size={28} color="#3F5857" />}
          text="Deposit"
          to="deposit"
        />
        <HomeLink
          icon={<CreditCard size={28} color="#3F5857" />}
          text="Pay"
          to="pay"
        />
        <HomeLink
          icon={<Swap size={28} color="#3F5857" />}
          text="Receive"
          to="receive"
        />
      </HStack>
      <RecentActivities />
    </Container>
  );
}
