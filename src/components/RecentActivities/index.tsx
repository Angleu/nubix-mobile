import { Button, FlatList, HStack, Text, VStack } from 'native-base';
import React from 'react';

import activitiesMock from '../../utils/mocks/activities';
import ActivityItem from './_ActivityItem';

const RecentActivities = () => {
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
        data={activitiesMock}
        mt={2}
        renderItem={({ item }) => <ActivityItem activity={item} />}
      />
    </VStack>
  );
};

export default RecentActivities;
