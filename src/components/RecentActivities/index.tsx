import { Button, Center, FlatList, HStack, Text, VStack } from 'native-base';
import React, { FC, useState } from 'react';
import { RefreshControl } from 'react-native';

import { TransactionType } from '../../models/Transaction';
import ActivityItem from './_ActivityItem';

type Props = {
  data: TransactionType[];
  onRefresh?: () => void;
  maxToShow?: number;
};

const RecentActivities: FC<Props> = ({
  data,
  onRefresh,
  maxToShow = undefined,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <VStack mt={5} flex={1}>
      <HStack justifyContent="space-between">
        <Text
          fontFamily="body"
          fontWeight="bold"
          fontSize="lg"
          color="coolGray.700"
        >
          Atividades Recentes
        </Text>
        <Button
          isDisabled={data.length === 0}
          variant="link"
          p="0"
          _text={{
            fontFamily: 'body',
            fontWeight: 'bold',
            fontSize: 'lg',
            color: 'primary.100',
          }}
        >
          Ver tudo
        </Button>
      </HStack>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              if (onRefresh) onRefresh();
              setRefreshing(false);
            }}
          />
        }
        ListEmptyComponent={() => (
          <Center mt="1/3">
            <Text fontFamily="body" color="primary.100" fontSize="lg">
              Não existem transações feitas
            </Text>
          </Center>
        )}
        data={data
          .sort((transactionA, transactionB) => {
            const dateA = new Date(transactionA.data_transaction);
            const dateB = new Date(transactionB.data_transaction);
            return dateB.getTime() - dateA.getTime();
          })
          .slice(0, maxToShow)}
        mt={2}
        renderItem={({ item }) => <ActivityItem activity={item} />}
      />
    </VStack>
  );
};

export default RecentActivities;
