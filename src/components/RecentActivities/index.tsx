import { Button, Center, FlatList, HStack, Text, VStack } from 'native-base';
import React, { FC } from 'react';

import { TransactionType } from '../../models/Transaction';

type Props = {
  data: TransactionType[];
};

const RecentActivities: FC<Props> = ({ data }) => {
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
        ListEmptyComponent={() => (
          <Center mt="1/3">
            <Text fontFamily="body" color="primary.100" fontSize="lg">
              Não existem transações feitas
            </Text>
          </Center>
        )}
        data={data}
        mt={2}
        renderItem={({ item }) => <Text key={item.IBANF}>{item.type}</Text>}
        // renderItem={({ item }) => <ActivityItem activity={item} />}
      />
    </VStack>
  );
};

export default RecentActivities;
