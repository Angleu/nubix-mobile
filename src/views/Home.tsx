import { Box, HStack } from 'native-base';
import React, { useRef } from 'react';
import { Share } from 'react-native';
import Swiper from 'react-native-swiper';

import Card from '../components/Card';
import HomeLink from '../components/HomeLink';
import Container from '../components/layout/Container';
import HomeHeader from '../components/layout/HomeHeader';
import RecentActivities from '../components/RecentActivities';
import { createShareableMessage } from '../utils/formatter';
import allActivities from '../utils/mocks/activities';
import { userLoggedIn } from '../utils/mocks/users';

export default function Home() {
  const selectedAccount = useRef(userLoggedIn.accounts[0]);
  return (
    <Container>
      <HomeHeader />
      <Swiper
        onIndexChanged={(index) =>
          (selectedAccount.current = userLoggedIn.accounts[index])
        }
        loop={false}
        dot={<Box w="2" h="2" bg="gray.100" borderRadius="full" m="1" />}
        activeDot={
          <Box w="4" h="2" bg="primary.100" borderRadius="full" m="1" />
        }
        bounces
      >
        {userLoggedIn.accounts.map((account) => (
          <Card
            {...account}
            key={account.accountNumber}
            onShare={() =>
              Share.share(
                {
                  title: 'Detalhes de Conta',
                  message: createShareableMessage({
                    name: userLoggedIn.name,
                    phoneNumber: userLoggedIn.phoneNumber,
                    iban: account.iban,
                  }),
                },
                { dialogTitle: 'Detalhes de Conta' }
              )
            }
          />
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
        <HomeLink
          iconName="bank-transfer-in"
          text="Receber"
          to="Receive"
          routeParams={{
            accountToReceive: selectedAccount.current,
          }}
        />
      </HStack>
      <RecentActivities data={allActivities} />
    </Container>
  );
}
