import { Button, FlatList, HStack, Text, VStack } from 'native-base';
import React, { FC } from 'react';

import { TransactionType } from '../../models/Transaction';
import ActivityItem from './_ActivityItem';

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
        data={data}
        mt={2}
        renderItem={({ item }) => <ActivityItem activity={item} />}
      />
    </VStack>
  );
};

export default RecentActivities;
