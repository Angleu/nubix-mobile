import { Box, HStack, Spinner } from 'native-base';
import React, { useRef } from 'react';
import { Share } from 'react-native';
import Swiper from 'react-native-swiper';
import { useQuery } from 'react-query';

import { getAllAccountsFromUser } from '../api/account';
import { getAllTransactions } from '../api/transaction';
import Card from '../components/Card';
import HomeLink from '../components/HomeLink';
import Container from '../components/layout/Container';
import HomeHeader from '../components/layout/HomeHeader';
import RecentActivities from '../components/RecentActivities';
import { useUser } from '../hooks';
import { MainStackScreenProps } from '../routes/types';
import { createShareableMessage } from '../utils/formatter';

export default function Home({
  route,
  navigation,
}: MainStackScreenProps<'Profile'>) {
  const { user } = useUser();
  const { accounts, firstName, lastName, phoneNumber } = user;

  const transactionsQuery = useQuery(
    'transactions',
    async () => await getAllTransactions(accounts[0].number_account)
  );
  const accountsQuery = useQuery('accounts', async () =>
    getAllAccountsFromUser(user)
  );

  const selectedAccount = useRef(accounts[0]);

  async function handleRefresh() {
    await transactionsQuery.refetch();
    await accountsQuery.refetch();
  }

  return (
    <Container>
      <HomeHeader navigation={navigation} route={route} />
      <Swiper
        onIndexChanged={(index) => (selectedAccount.current = accounts[index])}
        loop={false}
        dot={<Box w="2" h="2" bg="gray.100" borderRadius="full" m="1" />}
        activeDot={
          <Box w="4" h="2" bg="primary.100" borderRadius="full" m="1" />
        }
        bounces
      >
        {accountsQuery.isLoading ? (
          <Box mt={5} mx="2" px="10" py="6">
            <Spinner color="primary.100" size="lg" />
          </Box>
        ) : (
          accountsQuery.data.map((account) => (
            <Card
              {...account}
              key={account.number_account}
              onShare={() =>
                Share.share(
                  {
                    title: 'Detalhes de Conta',
                    message: createShareableMessage({
                      name: `${firstName} ${lastName}`,
                      phoneNumber: phoneNumber,
                      iban: account.IBAN,
                    }),
                  },
                  { dialogTitle: 'Detalhes de Conta' }
                )
              }
            />
          ))
        )}
      </Swiper>
      <HStack mt="0" justifyContent="center" space="12">
        <HomeLink
          iconName="bank-transfer-out"
          text="Transferir"
          to="Transfer"
        />
        <HomeLink
          iconName="inbox"
          text="Depositar"
          to="Deposit"
          routeParams={{
            accountToReceive: selectedAccount.current,
          }}
        />
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
      {transactionsQuery.isLoading ? (
        <Spinner color="primary.100" size="lg" />
      ) : (
        <RecentActivities
          data={transactionsQuery.data}
          onRefresh={handleRefresh}
          maxToShow={5}
        />
      )}
    </Container>
  );
}
