import { HStack } from 'native-base';
import { CreditCard, Swap, Tray } from 'phosphor-react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Card from '../components/Card';
import HomeLink from '../components/HomeLink';
import Container from '../components/layout/Container';
import HomeHeader from '../components/layout/HomeHeader';
import RecentActivities from '../components/RecentActivities';
import { RoutesEnum } from '../constants/routes';

export default function Home() {
  return (
    <SafeAreaView>
      <Container>
        <HomeHeader />
        <Card />
        <HStack mt="12" justifyContent="space-between">
          <HomeLink
            icon={<Swap size={28} color="#3F5857" />}
            text="Transfer"
            to={RoutesEnum.Transfer}
          />
          <HomeLink
            icon={<Tray size={28} color="#3F5857" />}
            text="Deposit"
            to={RoutesEnum.Transfer}
          />
          <HomeLink
            icon={<CreditCard size={28} color="#3F5857" />}
            text="Pay"
            to={RoutesEnum.Transfer}
          />
          <HomeLink
            icon={<Swap size={28} color="#3F5857" />}
            text="Receive"
            to={RoutesEnum.Transfer}
          />
        </HStack>
        <RecentActivities />
      </Container>
    </SafeAreaView>
  );
}
