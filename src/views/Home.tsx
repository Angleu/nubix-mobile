import { Box, HStack } from 'native-base';
import React from 'react';
import Swiper from 'react-native-swiper';

import Card from '../components/Card';
import HomeLink from '../components/HomeLink';
import Container from '../components/layout/Container';
import HomeHeader from '../components/layout/HomeHeader';
import RecentActivities from '../components/RecentActivities';
import { userLoggedIn } from '../utils/mocks/users';

export default function Home() {
  return (
    <Container>
      <HomeHeader />
      <Swiper
        loop={false}
        dot={<Box w="2" h="2" bg="gray.100" borderRadius="full" m="1" />}
        activeDot={
          <Box w="4" h="2" bg="primary.100" borderRadius="full" m="1" />
        }
        bounces
      >
        {userLoggedIn.accounts.map((account) => (
          <Card {...account} key={account.accountNumber} />
        ))}
      </Swiper>
      <HStack mt="0" justifyContent="center" space="12">
        <HomeLink
          iconName="bank-transfer-out"
          text="Transferir"
          to="Transfer"
        />
        <HomeLink iconName="inbox" text="Depositar" to="Deposit" />
        <HomeLink iconName="credit-card-outline" text="Pagar" to="Payment" />
        <HomeLink iconName="bank-transfer-in" text="Receber" to="Receive" />
      </HStack>
      <RecentActivities />
    </Container>
  );
}
